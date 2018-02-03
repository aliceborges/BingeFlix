import { RECEIVE_MOVIES,
         RECEIVE_MOVIE,
         START_LOADING } from '../actions/movie_actions.js';

const initialState = {
  loading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      return {loading: false};
    case RECEIVE_MOVIE:
      return {loading: false};
    case START_LOADING:
      return {loading: true};
    default:
      return state;
  }
};

export default loadingReducer;
