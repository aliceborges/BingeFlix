import { combineReducers } from 'redux';
import moviesReducer from './movies_reducer';
import genresReducer from './genres_reducer';
import listMoviesReducer from './list_movies_reducer';

const entitiesReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  list_movies: listMoviesReducer
});

export default entitiesReducer;
