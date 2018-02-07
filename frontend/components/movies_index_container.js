import React from 'react';
import { connect } from 'react-redux';
import MoviesIndex from './movies_index';
import { fetchMovies } from '../actions/movie_actions';
import { fetchGenres } from '../actions/genre_actions';
import { logout } from '../actions/session_actions';

const mapStateToProps = state => {
  const currentUserEmail = state.session.currentUser.email.split("@")[0];

  return {
    currentUserEmail
  };
};


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);
