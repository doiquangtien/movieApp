import { useEffect } from "react";
import Listslider from "./listSlider/Listslider";
import styles from "./body.module.scss";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { getTrending } from "../../redux/getApiSlice";
import {
  getTrendingMovies,
  getPopularMovies,
  getPopularTVseries,
} from "../../redux/callApi";

function Body() {
  const state = useSelector((state) => state.getApi);
  const dispatch = useDispatch();
  // console.log(trendingMovies);

  useEffect(() => {
    getTrendingMovies(dispatch);
    getPopularMovies(dispatch);
    getPopularTVseries(dispatch);
  }, [dispatch]);
  return (
    <Container maxWidth="1400px" className={styles.body}>
      <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
        <span>Continue</span>
        <Listslider data={state.trendingMovies} />
        <span>Popular movies</span>
        <Listslider data={state.popularMovies} />
        <span>Popular TV-series</span>
        <Listslider data={state.popularTvseries} />
      </Box>
    </Container>
  );
}

export default Body;
