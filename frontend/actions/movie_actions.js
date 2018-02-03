import * as MoviesAPIUtil from '../util/movies_api_util';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
export const START_LOADING = 'START_LOADING';

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

export const startLoading = () => ({
  type: START_LOADING
});

////thunk action creators

export const fetchMovies = () => dispatch => {
  dispatch(startLoading());
  return MoviesAPIUtil.fetchMovies()
        .then(serverMovies => (dispatch(receiveMovies(serverMovies))));
};

export const fetchMovie = id => dispatch => (
  MoviesAPIUtil.fetchMovie(id)
        .then(serverMovie => (dispatch(receiveMovie(serverMovie))))
);
