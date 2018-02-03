import React from 'react';
import Navbar from './navbar';
import GenreList from './genre-list';
import * as AppUtil from '../util/app_util';
import { Player } from 'video-react';
import LoadingIcon from './loading_icon';
import FeaturedMovie from './featured_movie';

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
                    currentUserEmail={ currentUserEmail }/>
          </div>
          { genres.length === 0 ? <LoadingIcon />  :
            <div>
              <FeaturedMovie movie = { movies[0] }/>
              <ul>
                { genres.map((genre, idx) => (
                  <li key={ AppUtil.uniqueKey(idx) }>
                    <GenreList key={genre.id}
                      genre={genre}/>
                    </li>
                  ))}
              </ul>
            </div>
          }
        </div>
    );
  }
}

export default MoviesIndex;
