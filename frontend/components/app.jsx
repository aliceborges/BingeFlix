import React from 'react';
import SessionFormContainer from './session_form_container';
import { HashRouter, Route, Link } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>BingeFlix</h1>

    <AuthRoute path="/signup" component={SessionFormContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
  </div>
);

export default App;
