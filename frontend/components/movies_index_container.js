import React from 'react';
import { connect } from 'react-redux';
import MoviesIndex from './movies_index';
import { fetchMovies, fetchMovie } from '../actions/movie_actions';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUserEmail = state.session.currentUser.email.split("@")[0];
  return {
    movies: Object.values(state.entities.movies),
    currentUserEmail
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    logout: () => dispatch(logout()),
    fetchMovie: id => dispatch(fetchMovie(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);
