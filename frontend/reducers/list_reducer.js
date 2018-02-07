import { RECEIVE_LIST } from '../actions/list_actions';
import merge from 'lodash/merge';

const initialState = "null";

const listReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIST:
      return action.list;
    default:
      return state;
  }
};

export default listReducer;
