import { RECEIVE_MOVIES,
         RECEIVE_MOVIE,
         START_MOVIES_LOADING,
         START_SINGLE_MOVIE_LOADING } from '../actions/movie_actions.js';

import { RECEIVE_GENRES,
         RECEIVE_GENRE,
         START_GENRES_LOADING,
         START_SINGLE_GENRE_LOADING } from '../actions/genre_actions';

const initialState = {
  moviesLoading: false,
  genresLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {moviesLoading: false});
    case RECEIVE_MOVIE:
      return Object.assign({}, state, {moviesLoading: false});
    case START_MOVIES_LOADING:
      return Object.assign({}, state, {moviesLoading: true});
    case START_SINGLE_MOVIE_LOADING:
      return Object.assign({}, state, {moviesLoading: true});
    case RECEIVE_GENRES:
      return Object.assign({}, state, {genresLoading: false});
    case RECEIVE_GENRE:
      return Object.assign({}, state, {genresLoading: false});
    case START_GENRES_LOADING:
      return Object.assign({}, state, {genresLoading: true});
    case START_SINGLE_GENRE_LOADING:
      return Object.assign({}, state, {genresLoading: true});
    default:
      return state;
  }
};

export default loadingReducer;
