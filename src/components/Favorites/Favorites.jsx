import { useEffect, useState } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./favorites.scss";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Bigcard from "../bigCard/Bigcard";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";
function FavoritesBody() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.typeMovie);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", state.currentUser.uid), (doc) => {
      setLoading(true);
      setData(doc.data().favorites);
    });
    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    const newData = data.filter((item) => item.id_fa !== id);
    const proceed = window.confirm(
      "Are you sure you want to delete this movie?"
    );
    if (proceed) {
      try {
        await updateDoc(doc(db, "users", state.currentUser.uid), {
          favorites: newData,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleDeleteAll = async () => {
    const proceed = window.confirm(
      "Are you sure you want to delete all movie?"
    );
    if (proceed) {
      try {
        await updateDoc(doc(db, "users", state.currentUser.uid), {
          favorites: [],
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container
      maxWidth="1400px"
      style={{ marginTop: "100px", minHeight: "100vh" }}
    >
      <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
        <div
          style={{
            color: "#fff",
            fontSize: "30px",
            fontWeight: "500",
            textAlign: "center",
            margin: "30px 0",
          }}
        >
          Your Favorite Movie List
        </div>
        <div className="line"></div>

        {loading ? (
          <>
            {data.length > 0 ? (
              <>
                <button className="empty-btn" onClick={handleDeleteAll}>
                  Delete All
                </button>
                <Grid container spacing={2}>
                  {data.map((item, i) => {
                    return (
                      <Grid key={i} item xs={12} sm={4} md={2.4}>
                        <div
                          onClick={() => {
                            navigate(`/details/${item.type}/${item.id_fa}`);
                          }}
                        >
                          <Bigcard data={item} />
                        </div>
                        <button
                          className="empty-btn"
                          onClick={() => {
                            handleDelete(item.id_fa);
                          }}
                        >
                          Delete
                        </button>
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            ) : (
              <div className="empty-history">
                <img
                  className="empty-img"
                  src="//www.iqiyipic.com/common/fix/empty_history.png"
                  alt=""
                />
                <p className="empty-title">No Favorite Movie List</p>
                <p className="empty-desc">
                  Try adding more movie to your Favorite Later !
                </p>
                <button
                  className="empty-btn"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Watch Now
                </button>
              </div>
            )}
          </>
        ) : (
          <Loading />
        )}
      </Box>
    </Container>
  );
}

export default FavoritesBody;
