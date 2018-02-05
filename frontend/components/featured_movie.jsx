import React from 'react';
import * as AppUtil from '../util/app_util';

const FeaturedMovie = ({ movies }) => {
  const movie = movies[AppUtil.randomNumFromOneToFive()];
  return (
    <section className="featured-movie"
      style={ { background: `linear-gradient(to right,
        rgba(0,0,0,1), rgba(0,0,0,.98),
        rgba(0, 0, 0, .1), transparent),
        url(${movie.image_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat'
      } }>
      <div className="title-blurb-container">
        <h1 className="featured-title">
          { movie.title }
        </h1>
        <br/>
        <p className="featured-blurb">
          { movie.blurb }
        </p>
        <br/>
        <div className="feature-buttons">
          <a href="#">
            <button className="play-button">Play</button>
          </a>
          &nbsp; &nbsp;
          <button className="my-list-button">
            <span id="plus-sign">+</span>
            &nbsp; My List
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
