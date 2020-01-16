import { getPostReddit } from '../services/redditApi';

export const RECEIVE_POSTS_SUCCESS = 'RECEIVE_POSTS_SUCCESS';
export const RECEIVE_POSTS_FAILURE = 'RECEIVE_POSTS_FAILURE';
export const REQUEST_POSTS = 'REQUEST_POSTS';

const requestPost = () => ({
  type: REQUEST_POSTS,
})

const receivePostsSuccess = ({ data }) => ({
  type: RECEIVE_POSTS_SUCCESS,
  posts: data.children.map(post => post.data.title),
})

const receivePostsFailure = (error) => ({
  type: RECEIVE_POSTS_FAILURE,
  error,
})

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPost());
    return getPostReddit()
      .then(
        (data) => dispatch(receivePostsSuccess(data)),
        (error) => dispatch(receivePostsFailure(error.message)),
      );
  };
}
