import { useEffect } from "react";
import Listslider from "./listSlider/Listslider";
import styles from "./body.module.scss";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  getTrendingMovies,
  getPopularMovies,
  getPopularTVseries,
  getTopRateMovies,
  getTopRateTvSeries,
} from "../../redux/callApi";

function Body() {
  const state = useSelector((state) => state.infoMovie);

  const dispatch = useDispatch();

  useEffect(() => {
    getTrendingMovies(dispatch);
    getPopularMovies(dispatch);
    getPopularTVseries(dispatch);
    getTopRateTvSeries(dispatch);
    getTopRateMovies(dispatch);
  }, [dispatch]);
  return (
    <Container maxWidth="1400px" className={styles.body}>
      <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
        <div className={styles.listSlide}>
          <span>Trending</span>
          <Listslider data={state.trendingMovies} />
        </div>
        <div className={styles.listSlide}>
          <span>Popular movies</span>
          <Listslider data={state.popularMovies} />
        </div>
        <div className={styles.listSlide}>
          <span>Popular TV-series</span>
          <Listslider data={state.popularTvseries} />
        </div>
        <div className={styles.listSlide}>
          <span>Top Rate Movies</span>
          <Listslider data={state.topRateMovies} />
        </div>
        <div className={styles.listSlide}>
          <span>Top Rate TV-series</span>
          <Listslider data={state.topRateTvseries} />
        </div>
      </Box>
    </Container>
  );
}

export default Body;
