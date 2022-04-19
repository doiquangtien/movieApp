import { createSlice } from "@reduxjs/toolkit";

const typeSlide = createSlice({
  name: "typeMovie",
  initialState: {
    typeGen: null,
    inputSearch: "",
    page: 2,
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
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
    getCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    getUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {
  getTypeGen,
  getInputSearch,
  getPage,
  getCurrentUser,
  getUserInfo,
} = typeSlide.actions;
export default typeSlide.reducer;
