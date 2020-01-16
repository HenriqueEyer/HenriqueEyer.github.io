import {
  REQUEST_POSTS,
  RECEIVE_POSTS_SUCCESS,
  RECEIVE_POSTS_FAILURE,
} from '../actions';

const INITIAL_POSTS = {
  isFetching: false,  
}

const getDate = () => {
  const now = new Date
  return `Last Uptade ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getDate()}/${now.getMonth()+1} de ${now.getFullYear()}`
}

const posts = (state = INITIAL_POSTS, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        data: getDate(),
        isFetching: false,
      }
    case RECEIVE_POSTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state;
  }
}

export default posts;
