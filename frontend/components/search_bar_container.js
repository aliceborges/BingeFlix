import { connect } from 'react-redux';
import React from 'react';
import SearchBar from './search_bar';
import { fetchMovies } from '../actions/movie_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres),
    ownProps: ownProps
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    updateResults: ownProps.updateResults
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
