import * as GenresAPIUtil from '../util/genres_api_util';

export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const RECEIVE_GENRE = 'RECEIVE_GENRE';
export const RECEIVE_GENRE_ERRORS = 'RECEIVE_GENRE_ERRORS';

export const receiveGenres = genres => ({
  type: RECEIVE_GENRES,
  genres
});

export const receiveGenre = genre => ({
  type: RECEIVE_GENRE,
  genre
});

export const fetchGenres = () => dispatch => (
  GenresAPIUtil.fetchGenres()
        .then(serverGenres => dispatch(receiveGenres(serverGenres)))
);

export const fetchGenre = id => dispatch => (
  GenresAPIUtil.fetchGenre(id)
        .then(serverGenre => dispatch(receiveGenre(serverGenre)))
);
