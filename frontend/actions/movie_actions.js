import * as MoviesAPIUtil from '../util/movies_api_util';

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';
export const START_MOVIES_LOADING = 'START_MOVIES_LOADING';
export const START_SINGLE_MOVIE_LOADING = 'START_SINGLE_MOVIE_LOADING';

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

export const startMoviesLoading = () => ({
  type: START_MOVIES_LOADING
});

export const startSingleMovieLoading = () => ({
  type: START_SINGLE_MOVIE_LOADING
});

////thunk action creators

export const fetchMovies = () => dispatch => {
  dispatch(startMoviesLoading());
  return MoviesAPIUtil.fetchMovies()
        .then(serverMovies => (dispatch(receiveMovies(serverMovies))));
};

export const fetchMovie = id => dispatch => {
  dispatch(startSingleMovieLoading());
  return MoviesAPIUtil.fetchMovie(id)
        .then(serverMovie => (dispatch(receiveMovie(serverMovie))));
};
