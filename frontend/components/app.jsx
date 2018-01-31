import React from 'react';
import SessionFormContainer from './session_form_container';
import { HashRouter, Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting_container';
import MoviesIndexContainer from './movies_index_container';

const App = () => (
  <div>
    <Route path="/" component={GreetingContainer} />
    <ProtectedRoute path="/browse" component={MoviesIndexContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
  </div>
);

export default App;
