import * as ListMoviesAPIUtil from '../util/list_movies_api_util';
export const RECEIVE_LIST_MOVIE = 'RECEIVE_LIST_MOVIE';
export const RECEIVE_LIST_MOVIES = 'RECEIVE_LIST_MOVIES';
export const REMOVE_LIST_MOVIE = 'REMOVE_LIST_MOVIE';

export const receiveListMovie = listMovie => ({
  type: RECEIVE_LIST_MOVIE,
  listMovie
});

export const removeListMovie = (userId, movieId) => ({
  type: REMOVE_LIST_MOVIE,
  userId,
  movieId
});

export const receiveListMovies = listMovies => ({
  type: RECEIVE_LIST_MOVIES,
  listMovies
});

export const createListMovie = listMovieData => dispatch => {
  return ListMoviesAPIUtil.createListMovie(listMovieData)
    .then(serverListMovie => dispatch(receiveListMovie(serverListMovie)));
};

export const fetchListMovies = () => dispatch => {
  return ListMoviesAPIUtil.fetchListMovies()
    .then(serverListMovies => dispatch(receiveListMovies(serverListMovies)));
};

export const deleteListMovie = (userId, movieId) => dispatch => {
  return ListMoviesAPIUtil.deleteListMovie(userId, movieId)
    .then(serverResponse => dispatch(removeListMovie(userId, movieId)));
};
