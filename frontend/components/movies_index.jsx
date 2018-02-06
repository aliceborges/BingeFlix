import React from 'react';
import Navbar from './navbar';
import * as AppUtil from '../util/app_util';
import LoadingIcon from './loading_icon';
import FeaturedMovie from './featured_movie';
import Carousel from './carousel';
import { ProtectedRoute } from '../util/route_util';

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMovies();
    this.props.fetchGenres();
  }


  render() {
    const { movies, moviesLoading, currentUserEmail, logout, genres } = this.props;

    if(moviesLoading) {
      return (
        <div className="browse-page">
          <div className="inner-page">
            <Navbar/>
          </div>
          <LoadingIcon />;
        </div>
      );
    }

    if(!movies) {
      return null;
    }


    return (
        <div className="browse-page">
          <div className="inner-page">
            <Navbar/>
          </div>
            <div>
              <FeaturedMovie movies = { movies }
                             numOfMovies = { movies.length }/>
              { genres.map((genre, idx) => (
                <Carousel key={idx} genre={ genre }/>
              ))
              }

            </div>
        </div>
    );
  }
}

export default MoviesIndex;
