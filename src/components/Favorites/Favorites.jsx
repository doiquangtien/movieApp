import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Bigcard from "../bigCard/Bigcard";
import Loading from "../loading/Loading";
function FavoritesBody() {
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.typeMovie);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const docRef = doc(db, "users", state.currentUser.uid);
        const docSnap = await getDoc(docRef);
        setLoading(true);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data().favorites);
          setData(docSnap.data().favorites);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fecthData();
  }, []);
  console.log(data);
  return (
    <Container
      maxWidth="1400px"
      style={{ marginTop: "90px", minHeight: "100vh" }}
    >
      <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
        <h1 style={{ color: "#fff" }}>Favorites</h1>
        {loading ? (
          <Grid container spacing={0}>
            {data.map((item, i) => {
              return (
                <Grid key={i} item xs={12} sm={12} md={2.4}>
                  <Bigcard data={item} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Loading />
        )}
      </Box>
    </Container>
  );
}

export default FavoritesBody;
