import { createSlice } from "@reduxjs/toolkit";

const typeSlide = createSlice({
  name: "typeMovie",
  initialState: {
    typeGen: null,
  },
  reducers: {
    getTypeGen: (state, action) => {
      state.typeGen = action.payload;
    },
  },
});

export const { getTypeGen } = typeSlide.actions;
export default typeSlide.reducer;
