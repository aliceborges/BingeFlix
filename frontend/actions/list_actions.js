import * as ListAPIUtil from '../util/lists_api_util';

export const RECEIVE_LIST = 'RECEIVE_LIST';

/////reducer for these actions is the session reducer
//// these actions are dispatched in the session list_actions
/// when a new user creates an account (signs up), a list is
/// created for them. When they log in, their list is fetched

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const fetchList = userId => dispatch => (
  ListAPIUtil.fetchList(userId)
    .then(serverList => dispatch(receiveList(serverList)))
);

export const createList = userId => dispatch => (
  ListAPIUtil.createList(userId)
    .then(serverList => dispatch(receiveList(serverList)))
);
