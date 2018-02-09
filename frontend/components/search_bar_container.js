import { connect } from 'react-redux';
import React from 'react';
import { fetchMovies } from '../actions/movie_actions';
import { fetchGenres } from '../actions/genre_actions';
import SearchBar from './search_bar';

const mapStateToProps = state => {
  return {
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchGenres: () => dispatch(fetchGenres())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
