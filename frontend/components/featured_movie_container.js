import React from 'react';
import { connect } from 'react-redux';
import FeaturedMovie from './featured_movie';
import { fetchMovies } from '../actions/movie_actions';
import { fetchGenres } from '../actions/genre_actions';
import { logout } from '../actions/session_actions';
import { createListMovie, deleteListMovie, fetchListMovies } from '../actions/list_movie_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const listMovies = Object.values(state.entities.list_movies);

  return {
    movies: Object.values(state.entities.movies),
    moviesLoading: state.ui.loading.moviesLoading,
    currentUser,
    listMovies,
    ownProps: ownProps
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchGenres: () => dispatch(fetchGenres()),
    fetchListMovies: () => dispatch(fetchListMovies()),
    createListMovie: listMovieData => dispatch(createListMovie(listMovieData)),
    deleteListMovie: (userId, movieId) => dispatch(deleteListMovie(userId, movieId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMovie);
