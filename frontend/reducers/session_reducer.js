import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LIST } from '../actions/list_actions';
import merge from 'lodash/merge';

const initialState = {
  currentUser: null,
  list: null
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    case RECEIVE_LIST:
      return merge({}, state, {list: action.list});
    default:
      return state;
  }
};

export default sessionReducer;
