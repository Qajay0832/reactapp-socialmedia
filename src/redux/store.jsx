import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import postReducer from "./reducer";

export default configureStore({
    reducer: {
      posts: postReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });
