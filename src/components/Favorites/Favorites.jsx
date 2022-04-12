import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Bigcard from "../bigCard/Bigcard";
function FavoritesBody() {
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.typeMovie);

  useEffect(() => {
    const fecthData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(
          collection(db, state.currentUser.uid)
        );
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          list.push(doc.data());
          // console.log(doc.id, " => ", doc.data());
        });
        setData(list);
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
        <Grid container spacing={0}>
          {data.map((item, i) => {
            return (
              <Grid key={i} item xs={12} sm={12} md={2.4}>
                <Bigcard data={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default FavoritesBody;
