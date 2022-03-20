import { createSlice } from "@reduxjs/toolkit";

const typeSlide = createSlice({
  name: "typeMovie",
  initialState: {
    typeMovie: null,
  },
  reducers: {
    getType: (state, action) => {
      state.typeMovie = action.payload;
    },
  },
});

export const { getType } = typeSlide.actions;
export default typeSlide.reducer;
