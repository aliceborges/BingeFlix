import React from 'react';
import { connect } from 'react-redux';
import MoviesIndex from './movies_index';
import { fetchMovies } from '../actions/movie_actions';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.entities.movies
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    logout: () => dispatch(logout())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);
