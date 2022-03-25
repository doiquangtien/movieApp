import { createSlice } from "@reduxjs/toolkit";

const typeSlide = createSlice({
  name: "typeMovie",
  initialState: {
    typeGen: null,
    inputSearch: "",
  },
  reducers: {
    getTypeGen: (state, action) => {
      state.typeGen = action.payload;
    },
    getInputSearch: (state, action) => {
      state.inputSearch = action.payload;
    },
  },
});

export const { getTypeGen, getInputSearch } = typeSlide.actions;
export default typeSlide.reducer;
