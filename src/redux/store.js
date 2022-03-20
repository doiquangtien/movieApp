import { configureStore } from "@reduxjs/toolkit";
import infoMovieReducer from "./infoMovieSlice";
import typeMovieReducer from "./typeSlice";
export default configureStore({
  reducer: {
    infoMovie: infoMovieReducer,
    typeMovie: typeMovieReducer,
  },
});
