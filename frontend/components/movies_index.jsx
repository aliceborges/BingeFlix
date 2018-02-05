import React from 'react';
import Navbar from './navbar';
import * as AppUtil from '../util/app_util';
import LoadingIcon from './loading_icon';
import FeaturedMovie from './featured_movie';
import Carousel from './carousel';

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMovies();
    this.props.fetchGenres();
  }


  render() {
    const { movies, loading, currentUserEmail, logout, genres } = this.props;

    return (
        <div className="browse-page">
          <div className="inner-page">
            <Navbar logout={ logout }
                    currentUserEmail={ currentUserEmail }
                    movies={ movies }
                    genres={ genres }/>
          </div>
          { genres.length === 0 ? <LoadingIcon />  :
            <div>
              <FeaturedMovie movies = { movies.slice(5) }/>
              { genres.map((genre, idx) => (
                <Carousel key={idx} genre={ genre }/>
              ))
              }

            </div>
          }
        </div>
    );
  }
}

export default MoviesIndex;
