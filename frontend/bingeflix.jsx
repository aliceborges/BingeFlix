import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchMovie, fetchMovies } from './actions/movie_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }



  ///testing
  window.fetchMovie = fetchMovie;
  window.fetchMovies = fetchMovies;
  
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ///end of testing


  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store }/>, root);
});
