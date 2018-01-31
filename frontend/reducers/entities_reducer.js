import { combineReducers } from 'redux';
import moviesReducer from './movies_reducer';

const entitiesReducer = combineReducers({
  movies: moviesReducer
});

export default entitiesReducer;
