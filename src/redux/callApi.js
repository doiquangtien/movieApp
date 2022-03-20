import axios from "axios";

import {
  getTrending,
  getPopularTVseriesAction,
  getPopularMoviesAction,
  getTopRateMoviesAction,
  getTopRateTVseriesAction,
  getAllMoviesAction,
} from "./infoMovieSlice";
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
export const getTopRateMovies = async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch(getTopRateMoviesAction(res.data.results));
  } catch (err) {
    console.log("getTopRateMovies error", err);
  }
};

export const getTopRateTvSeries = async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch(getTopRateTVseriesAction(res.data.results));
  } catch (err) {
    console.log("getTopRateTvSeries error", err);
  }
};

export const getAllMovies = async (dispatch, type) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=all&page=1`
    );
    dispatch(getAllMoviesAction(res.data.results));
  } catch (err) {
    console.log("getAllMoviesAction error", err);
  }
};
