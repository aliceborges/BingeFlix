import React from 'react';
import SessionFormContainer from './session_form_container';
import { Switch, HashRouter, Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting_container';
import MoviesIndexContainer from './movies_index_container';
import MoviePlayContainer from './movie_play_container';

const App = () => (
  <div>
    <Switch>
      <ProtectedRoute path="/play/:movieId" component={MoviePlayContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <ProtectedRoute path="/browse" component={MoviesIndexContainer} />
      <Route path="/" component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
