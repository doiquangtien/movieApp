import { useEffect, useState } from "react";
import Listslider from "./listSlider/Listslider";
import styles from "./body.module.scss";
import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Slideshow from "../slideshow/Slideshow";
import {
  getTrendingMovies,
  getPopularMovies,
  getPopularTVseries,
  getTopRateMovies,
  getTopRateTvSeries,
} from "../../redux/callApi";

function Body() {
  const state = useSelector((state) => state.infoMovie);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    const loadTrending = async () => {
      await getTrendingMovies(dispatch);
      setLoad(true);
    };
    const loadPopularM = async () => {
      await getPopularMovies(dispatch);
      setLoad(true);
    };
    const loadPopularTv = async () => {
      await getPopularTVseries(dispatch);
      setLoad(true);
    };
    const loadTopTv = async () => {
      await getTopRateTvSeries(dispatch);
      setLoad(true);
    };
    const loadTopMovie = async () => {
      await getTopRateMovies(dispatch);
      setLoad(true);
    };
    loadTrending();
    loadPopularM();
    loadPopularTv();
    loadTopMovie();
    loadTopTv();
    return () => {
      abortController.abort();
    };
  }, [dispatch]);
  return (
    <>
      <Slideshow bannerInfo={state.trendingMovies} />

      <Container maxWidth="1400px" className={styles.body}>
        <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
          <div className={styles.listSlide}>
            <span>Trending</span>
            <Listslider data={state.trendingMovies} load={load} />
          </div>
          <div className={styles.listSlide}>
            <span>Popular movies</span>
            <Listslider data={state.popularMovies} type={"movie"} load={load} />
          </div>
          <div className={styles.listSlide}>
            <span>Popular TV-series</span>
            <Listslider data={state.popularTvseries} type={"tv"} load={load} />
          </div>
          <div className={styles.listSlide}>
            <span>Top Rate Movies</span>
            <Listslider data={state.topRateMovies} type={"movie"} load={load} />
          </div>
          <div className={styles.listSlide}>
            <span>Top Rate TV-series</span>
            <Listslider data={state.topRateTvseries} type={"tv"} load={load} />
          </div>
        </Box>
      </Container>
    </>
  );
}

export default Body;
