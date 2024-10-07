import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlice";
import moviesReducer from "./Slices/MoviesSlice";

const appStore=configureStore({
  reducer:{
    user:userReducer,
    movies:moviesReducer
  }
})
export default appStore;