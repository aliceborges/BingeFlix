import React from 'react';
import { connect } from 'react-redux';
import { fetchListMovies, createListMovie,
         deleteListMovie } from '../actions/list_movie_actions';
import { fetchList } from '../actions/list_actions';
import GenrePage from './genre_page';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const allMovies = Object.values(state.entities.movies);
  const allGenres = Object.values(state.entities.genres);
  return {
    currentUser,
    moviesLoading: state.ui.loading.moviesLoading,
    ownProps: ownProps
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchList: (userId) => dispatch(fetchList(userId)),
    fetchListMovies: () => dispatch(fetchListMovies()),
    createListMovie: listMovieData => dispatch(createListMovie(listMovieData)),
    deleteListMovie: (userId, movieId) => dispatch(deleteListMovie(userId, movieId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(GenrePage);
