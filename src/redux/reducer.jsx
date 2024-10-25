import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./actionTypes.jsx";

const initialState = {
  loading: false,
  posts: [],
  error: "",
  id: "",
};

const postReducer = (state = initialState, action) => {
    

  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true };
    case FETCH_POST_SUCCESS:
      return { posts: action.payload, loading: false, error: "" };
    case FETCH_POST_FAILURE:
      return { posts: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
export default postReducer;
