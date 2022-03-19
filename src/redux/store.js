import { configureStore } from "@reduxjs/toolkit";
import getApiReducer from "./getApiSlice";
export default configureStore({
  reducer: {
    getApi: getApiReducer,
  },
});
