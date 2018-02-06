import { connect } from 'react-redux';
import React from 'react';
import MoviePlay from './movie_play';
import { fetchMovies } from '../actions/movie_actions';
import { fetchGenres } from '../actions/genre_actions';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  console.warn(ownProps);
  const movieId = ownProps.match.params.movieId;
  return {
    movieId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovie: id => dispatch(fetchMovies(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviePlay);
