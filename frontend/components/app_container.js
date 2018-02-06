import { connect } from 'react-redux';
import React from 'react';
import App from './app';
import { logout } from '../actions/session_actions';


const mapStateToProps = state => {
  const currentUserEmail = state.session.currentUser.email.split("@")[0];
  return {
    currentUserEmail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
