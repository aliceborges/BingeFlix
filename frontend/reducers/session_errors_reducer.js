import { RECEIVE_CURRENT_USER,
        RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [];
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return newState;
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
