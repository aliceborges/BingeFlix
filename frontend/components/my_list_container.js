import React from 'react';
import { connect } from 'react-redux';
import { fetchListMovies, createListMovie,
         deleteListMovie } from '../actions/list_movie_actions';
import { fetchList } from '../actions/list_actions';
import MyList from './my_list';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const listMovies = Object.values(state.entities.list_movies);
  return {
    currentUser,
    listMovies,
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


export default connect(mapStateToProps, mapDispatchToProps)(MyList);
