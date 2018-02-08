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
      let nextStateArray = Object.values(nextState);
      let toRemoveId;
      for(let i = 0; i < nextStateArray.length; i++) {
        if(nextStateArray[i].movie_id === action.movieId && nextStateArray[i].user_id === action.userId){
          toRemoveId = nextStateArray[i].id;
        }
      }
      delete nextState[toRemoveId];
      return nextState;
    default:
      return state;
  }

};

export default listMoviesReducer;
