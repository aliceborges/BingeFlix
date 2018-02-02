import React from 'react';
import * as AppUtil from '../util/app_util';

const MovieIndexItem = ({movie}) => {

  return (
    <div className="movie-index-item">
      <img src={movie.image_url}/>
      <p className="movie-title">
        {movie.title}
      </p>
    </div>
  );
};


export default MovieIndexItem;
