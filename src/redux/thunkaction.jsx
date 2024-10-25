import {
  fetchPostFailure,
  fetchPostRequest,
  fetchPostSuccess,
} from "./actions.jsx";

export const fetchPosts = () => {
  return async (dispatch) => {

    dispatch(fetchPostRequest);
    try {
      const postsData = JSON.parse(localStorage.getItem("posts"));
      if (postsData) {
        dispatch(fetchPostSuccess(postsData));
      } else {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        const data = await response.json();
        localStorage.setItem("posts", JSON.stringify(data));
        dispatch(fetchPostSuccess(data));
      }
    } catch (error) {
      dispatch(fetchPostFailure(error));
    }
  };
};
