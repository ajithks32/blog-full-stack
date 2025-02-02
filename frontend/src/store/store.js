import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Slices/postsSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
