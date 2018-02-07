import * as ListMoviesAPIUtil from '../util/list_movies_api_util';
export const RECEIVE_LIST_MOVIE = 'RECEIVE_LIST_MOVIE';
export const REMOVE_LIST_MOVIE = 'REMOVE_LIST_MOVIE';

export const receiveListMovie = listMovie => ({
  type: RECEIVE_LIST_MOVIE,
  listMovie
});

export const removeListMovie = id => ({
  type: REMOVE_LIST_MOVIE,
  listMovieID: id
});

export const createListMovie = listMovieData => dispatch => {
  return ListMoviesAPIUtil.createListMovie(listMovieData)
    .then(serverListMovie => dispatch(receiveListMovie(serverListMovie)));
};

// export const fetchListMovie = id => dispatch => {
//   return ListMoviesAPIUtil.fetchListMovie(id)
//     .then(serverListMovie => dispatch(receiveListMovie(serverListMovie)));
// };

export const deleteListMovie = id => dispatch => {
  return ListMoviesAPIUtil.deleteListMovie(id)
    .then(serverResponse => dispatch(removeListMovie(id)));
};
