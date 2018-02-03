import { combineReducers } from 'redux';
import moviesReducer from './movies_reducer';
import genresReducer from './genres_reducer';

const entitiesReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer
});

export default entitiesReducer;
