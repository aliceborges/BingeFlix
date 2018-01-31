import { RECEIVE_MOVIE, RECEIVE_MOVIES } from '../actions/movie_actions';
import merge from 'lodash/merge';

const moviesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_MOVIES:
      return action.movies;
    case RECEIVE_MOVIE:
      return merge({}, state, {[action.movie.id]: action.movie});
    default:
      return state;
  }
};

export default moviesReducer;
