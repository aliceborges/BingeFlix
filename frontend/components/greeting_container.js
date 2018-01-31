import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export default connect(mapStateToProps, null)(Greeting);
