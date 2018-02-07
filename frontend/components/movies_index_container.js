import React from 'react';
import { connect } from 'react-redux';
import MoviesIndex from './movies_index';
import { fetchMovies } from '../actions/movie_actions';
import { fetchGenres } from '../actions/genre_actions';
import { logout } from '../actions/session_actions';
import { fetchList } from '../actions/list_actions';

const mapStateToProps = state => {
  const currentUserEmail = state.session.currentUser.email.split("@")[0];
  const currentUserId = state.session.currentUser.id;
  return {
    currentUserEmail,
    currentUserId
  };
};


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchList: userId => dispatch(fetchList(userId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);
