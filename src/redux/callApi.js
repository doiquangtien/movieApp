import axios from "axios";
import {
  getTrending,
  getPopularTVseriesAction,
  getPopularMoviesAction,
} from "./getApiSlice";
const API_KEY = "9469ca4e1229b1db42ff4124c1655066";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    );
    dispatch(getTrending(res.data.results));
  } catch (err) {
    console.log("GetTrending error", err);
  }
};

export const getPopularMovies = async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch(getPopularMoviesAction(res.data.results));
  } catch (err) {
    console.log("getPopularMoviesAction error", err);
  }
};

export const getPopularTVseries = async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch(getPopularTVseriesAction(res.data.results));
  } catch (err) {
    console.log("getPopularTVseriesAction error", err);
  }
};
