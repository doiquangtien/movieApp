import { createSlice } from "@reduxjs/toolkit";

const infoMovieSlice = createSlice({
  name: "infoMovies",
  initialState: {
    trendingMovies: null,
    popularMovies: null,
    popularTvseries: null,
    topRateMovies: null,
    topRateTvseries: null,
    detailMovie: null,
    seasonsMovie: null,
    searchMovie:null,
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
    getDetailsByIdAction: (state, action) => {
      state.detailMovie = action.payload;
    },
    getSeasonsAction: (state, action) => {
      state.seasonsMovie = action.payload;
    },
    getSearchAction:(state,action)=>{
      state.searchMovie = action.payload
    }
  },
});

export const {
  getTrending,
  getPopularTVseriesAction,
  getPopularMoviesAction,
  getTopRateMoviesAction,
  getTopRateTVseriesAction,
  getDetailsByIdAction,
  getSeasonsAction,
  getSearchAction,
} = infoMovieSlice.actions;
export default infoMovieSlice.reducer;
