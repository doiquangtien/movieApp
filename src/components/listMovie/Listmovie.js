import { useEffect } from "react";
import Item from "../itemCard/Itemcard";
import { useParams } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../redux/callApi";
import { useDispatch } from "react-redux";

function Listmovie() {
  const { type } = useParams();
  const dispatch = useDispatch();

  const state = useSelector((state) => state.infoMovie);
  useEffect(() => {
    getAllMovies(dispatch, type);
    console.log(type);
  }, [type]);

  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // let arr = arrOdd.slice(0, list);
  // const handleMore = () => {
  //   arr = arrOdd.slice(
  //     0,
  //     setlist((prev) => {
  //       return prev + 6;
  //     })
  //   );
  // };
  // const handleCollect = () => {
  //   arr = arrOdd.slice(0, setlist(12));
  // };
  return (
    <Container maxWidth="1400px">
      <Box
        sx={{
          flexGrow: 1,
          margin: "0 36px",
        }}
      >
        <span style={{ color: "#fff", fontSize: "24px" }}>
          List {jsUcfirst(type)}
        </span>

        <Grid container spacing={2}>
          {state.allMovie !== null &&
            state.allMovie.length > 0 &&
            state.allMovie.map((item, i) => {
              if (item.poster_path && item.backdrop_path !== null) {
                let imagePost = `https://image.tmdb.org/t/p/original${item.poster_path}`;
                let imageDrop = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
                return (
                  <Grid key={i} item md={2.4}>
                    <Item imgP={imagePost} imgD={imageDrop} data={item} />
                  </Grid>
                );
              }
            })}
        </Grid>

        {/* <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {arr.length < arrOdd.length ? (
            <button
              onClick={handleMore}
              style={{
                backgroundColor: "#1e70a8",
                color: "#fff",
                width: "100px",
                height: "40px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Xem thêm
            </button>
          ) : (
            <button
              onClick={handleCollect}
              style={{
                backgroundColor: "#1e70a8",
                color: "#fff",
                width: "100px",
                height: "40px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Thu vào
            </button>
          )}
        </div> */}
      </Box>
    </Container>
  );
}

export default Listmovie;
