import {
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
  FETCH_POST_REQUEST,
} from "./actionTypes.jsx";

export const fetchPostRequest = () => ({
  type: FETCH_POST_REQUEST,
});

export const fetchPostSuccess = (posts) => ({
  type: FETCH_POST_SUCCESS,
  payload:posts,
});

export const fetchPostFailure = (error) => ({
  type: FETCH_POST_FAILURE,
  payload:error,
});
