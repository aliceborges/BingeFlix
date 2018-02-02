import React from 'react';
import Navbar from './navbar';
import GenreList from './genre-list';
import * as AppUtil from '../util/app_util';
import { Player } from 'video-react';

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  genres() {
    return ["TV SHOWS", "MOVIES", "ORIGINALS", "COMEDY",
            "DRAMA", "ANIMALS", "HORROR", "ROMANCE"];
  }


  render() {
    let featuredMovie;
    let movieTitle;
    let movieYear;
    let movieGenre;
    let movieBlurb;
    let movieImage;
    let movieVideo;
    let backgroundStyle;
    let backgroundImage;
    let handlePlayButton;

    if(this.props.movies[0]) {
      featuredMovie = this.props.movies[0];
      movieTitle = featuredMovie.title;
      movieYear = featuredMovie.year;
      movieBlurb = featuredMovie.blurb;
      movieImage = featuredMovie.image_url;
      movieVideo = featuredMovie.video_url;
      backgroundStyle = {
        background: `linear-gradient(to right,
                      rgba(0,0,0,1), rgba(0,0,0,.98),
                      rgba(0, 0, 0, .1), transparent),
                      url(${movieImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat'};
    } else {
      movieTitle = "";
    }



    return (
      <div className="browse-page">
        <div className="inner-page">
          <Navbar logout={this.props.logout}
            currentUserEmail={this.props.currentUserEmail}/>
        </div>

          <section className="featured-movie" style={ backgroundStyle }>
            <div className="title-blurb-container">
              <h1 className="featured-title">
                { movieTitle }
              </h1>
              <br/>
              <ul className="year-genre-container">
                <li className="featured-year">
                  { movieYear }
                </li>
                <li className="featured-genre">documentary</li>
              </ul>
              <p className="featured-blurb">
                { movieBlurb }
              </p>
              <br/>
              <div className="feature-buttons">
                <a href={ movieVideo }>
                  <button className="play-button">Play</button>
                </a>
                  &nbsp;
                  &nbsp;
                <button className="my-list-button"><span id="plus-sign">+</span>
                &nbsp; My List</button>


              </div>
            </div>
          </section>

        {/* <div className="inner-page"> */}
          <ul>
          { this.genres().map((genre, idx) => (
              <li key={AppUtil.uniqueKey(idx)}>
                <GenreList key={AppUtil.uniqueKey(idx)}
                          movies={ this.props.movies }
                          genre={genre}/>
              </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default MoviesIndex;
