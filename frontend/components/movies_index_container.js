import React from 'react';
import { connect } from 'react-redux';
import MoviesIndex from './movies_index';
import { fetchMovies } from '../actions/movie_actions';
import { fetchGenres } from '../actions/genre_actions';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUserEmail = state.session.currentUser.email.split("@")[0];

  return {
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres),
    moviesLoading: state.ui.loading.moviesLoading,
    genresLoading: state.ui.loading.genresLoading,
    currentUserEmail,
    ownProps: ownProps
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchGenres: () => dispatch(fetchGenres()),
    logout: () => dispatch(logout())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);
