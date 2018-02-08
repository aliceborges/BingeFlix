import React from 'react';
import { connect } from 'react-redux';
import AllMovies from './all_movies';
import { fetchMovies } from '../actions/movie_actions';
import { fetchGenres } from '../actions/genre_actions';
import { logout } from '../actions/session_actions';
import { fetchListMovies, createListMovie, deleteListMovie } from '../actions/list_movie_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUserEmail = state.session.currentUser.email.split("@")[0];
  const currentUser = state.session.currentUser;
  const listId = state.session.list.id;
  const listMovies = Object.values(state.entities.list_movies);
  return {
    movies: Object.values(state.entities.movies),
    genres: Object.values(state.entities.genres),
    moviesLoading: state.ui.loading.moviesLoading,
    genresLoading: state.ui.loading.genresLoading,
    listId,
    currentUser,
    listMovies,
    ownProps: ownProps
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    fetchGenres: () => dispatch(fetchGenres()),
    fetchListMovies: () => dispatch(fetchListMovies()),
    createListMovie: () => dispatch(createListMovie()),
    deleteListMovie: () => dispatch(deleteListMovie())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);
