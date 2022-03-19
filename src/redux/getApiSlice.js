import { createSlice } from "@reduxjs/toolkit";

const getApiSlice = createSlice({
  name: "getApi",
  initialState: {
    trendingMovies: null,
    popularMovies: null,
    popularTvseries: null,
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
  },
});

export const { getTrending, getPopularTVseriesAction, getPopularMoviesAction } =
  getApiSlice.actions;
export default getApiSlice.reducer;
