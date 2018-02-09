import React from 'react';
import { connect } from 'react-redux';
import { fetchListMovies, createListMovie,
         deleteListMovie } from '../actions/list_movie_actions';
import { fetchList } from '../actions/list_actions';
import SearchResults from './search_results';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const movies = Object.values(state.entities.movies);
  const listMovies = Object.values(state.entities.list_movies);

  return {
    currentUser,
    movies,
    moviesLoading: state.ui.loading.moviesLoading,
    ownProps: ownProps,
    results: ownProps.results,
    listMovies
  };
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchList: (userId) => dispatch(fetchList(userId)),
    fetchMovies: () => dispatch(fetchListMovies()),
    createListMovie: listMovieData => dispatch(createListMovie(listMovieData)),
    deleteListMovie: (userId, movieId) => dispatch(deleteListMovie(userId, movieId))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));
