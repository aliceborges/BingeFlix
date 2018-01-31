import * as MoviesAPIUtil from '../util/movies_api_util';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

////thunk action creators

export const fetchMovies = () => dispatch => (
  MoviesAPIUtil.fetchMovies()
        .then(serverMovies => (dispatch(receiveMovies(serverMovies))))
);

export const fetchMovie = id => dispatch => (
  MoviesAPIUtil.fetchMovie()
        .then(serverMovie => (dispatch(receiveMovie(serverMovie))))
);
