import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movie_actions';
import { fetchGenres } from '../actions/genre_actions';
import GenrePage from './genre_page';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const allMovies = Object.values(state.entities.movies);
  const allGenres = Object.values(state.entities.genres);

  return {
    currentUser,
    moviesLoading: state.ui.loading.moviesLoading,
    ownProps: ownProps,
    allMovies,
    allGenres
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchGenres: () => dispatch(fetchGenres())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GenrePage);
