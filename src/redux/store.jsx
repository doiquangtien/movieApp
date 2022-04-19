import { configureStore } from "@reduxjs/toolkit";
import infoMovieReducer from "./infoMovieSlice";
import typeMovieReducer from "./typeSlice";
export default configureStore({
  reducer: {
    infoMovie: infoMovieReducer,
    typeMovie: typeMovieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["typeMovie/getCurrentUser", "typeMovie/getUserInfo"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["typeMovie.currentUser", "typeMovie.userInfo"],
      },
    }),
});
