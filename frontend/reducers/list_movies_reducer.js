import { RECEIVE_LIST_MOVIE, RECEIVE_LIST_MOVIES,
         REMOVE_LIST_MOVIE } from '../actions/list_movie_actions';
import merge from 'lodash/merge';

const listMoviesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECEIVE_LIST_MOVIE:
      return Object.assign({}, state, {[action.listMovie.id]: action.listMovie} );
    case RECEIVE_LIST_MOVIES:
      return action.listMovies;
    case REMOVE_LIST_MOVIE:
      nextState = merge({}, state);
      delete nextState[action.listMovieId];
      return nextState;
    default:
      return state;
  }

};

export default listMoviesReducer;
