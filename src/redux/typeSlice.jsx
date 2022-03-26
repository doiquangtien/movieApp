import { createSlice } from "@reduxjs/toolkit";

const typeSlide = createSlice({
  name: "typeMovie",
  initialState: {
    typeGen: null,
    inputSearch: "",
    page: 2,
  },
  reducers: {
    getTypeGen: (state, action) => {
      state.typeGen = action.payload;
    },
    getInputSearch: (state, action) => {
      state.inputSearch = action.payload;
    },
    getPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { getTypeGen, getInputSearch, getPage } = typeSlide.actions;
export default typeSlide.reducer;
