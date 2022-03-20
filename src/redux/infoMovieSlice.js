import { createSlice } from "@reduxjs/toolkit";

const infoMovieSlice = createSlice({
  name: "infoMovies",
  initialState: {
    trendingMovies: null,
    popularMovies: null,
    popularTvseries: null,
    topRateMovies: null,
    topRateTvseries: null,
    allMovie: null,
  },
  reducers: {
    getTrending: (state, action) => {
      state.trendingMovies = action.payload;
    },
    getPopularMoviesAction: (state, action) => {
      state.popularMovies = action.payload;
    },
    getPopularTVseriesAction: (state, action) => {
      state.popularTvseries = action.payload;
    },
    getTopRateMoviesAction: (state, action) => {
      state.topRateMovies = action.payload;
    },
    getTopRateTVseriesAction: (state, action) => {
      state.topRateTvseries = action.payload;
    },
    getAllMoviesAction: (state, action) => {
      state.allMovie = action.payload;
    },
  },
});

export const {
  getTrending,
  getPopularTVseriesAction,
  getPopularMoviesAction,
  getTopRateMoviesAction,
  getTopRateTVseriesAction,
  getAllMoviesAction,
} = infoMovieSlice.actions;
export default infoMovieSlice.reducer;
