import React from 'react';
import { connect } from 'react-redux';
import MoviesIndex from './movies_index';
import { fetchMovies, fetchMovie } from '../actions/movie_actions';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  
  return {
    movies: Object.values(state.entities.movies)
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
