import React from 'react';
import Navbar from './navbar';
import * as AppUtil from '../util/app_util';
import LoadingIcon from './loading_icon';
import FeaturedMovie from './featured_movie';
import Carousel from './carousel';
import { ProtectedRoute } from '../util/route_util';
import Footer from './footer';
import { Route, Switch } from 'react-router-dom';
import MyListContainer from './my_list_container';
import AllMoviesContainer from './all_movies_container';

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUserEmail, logout } = this.props;
    return (
        <div className="browse-page">
          <div className="inner-page">
            <Navbar logout={ logout } currentUserEmail={ currentUserEmail }/>
          </div>
          <Switch>
            <Route path="/browse/my-list" component={ MyListContainer }/>
            <Route path="/browse" component={AllMoviesContainer}/>
          </Switch>
          <Footer />
        </div>
    );
  }
}

export default MoviesIndex;
