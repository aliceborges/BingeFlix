import React from 'react';
import { connect } from 'react-redux';
import FeaturedMovie from './featured_movie';
import { fetchMovies } from '../actions/movie_actions';
import { fetchGenres } from '../actions/genre_actions';
import { logout } from '../actions/session_actions';
import { createListMovie } from '../actions/list_movie_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUserEmail = state.session.currentUser.email.split("@")[0];
  const listId = state.session.list.id;
  return {
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres),
    moviesLoading: state.ui.loading.moviesLoading,
    genresLoading: state.ui.loading.genresLoading,
    listId,
    ownProps: ownProps
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchGenres: () => dispatch(fetchGenres()),
    createListMovie: listMovieData => dispatch(createListMovie(listMovieData))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMovie);
