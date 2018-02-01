import React from 'react';
import * as AppUtil from '../util/app_util';

const MovieIndexItem = (props) => {

  return (
    <div className="movie-index-item">
      {props.movie.title}
      {props.movie.year}
    </div>
  );
};


export default MovieIndexItem;
