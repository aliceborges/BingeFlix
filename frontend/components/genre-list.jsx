import React from 'react';
import MovieIndexItem from './movie_index_item';

const GenreList = props => {

  return (
    <div className="genre-list">
      <h2 className="genre-name">{props.genre}</h2>
      <ul className="movie-index-container">
        { props.movies.slice(0, 6).map(movie => (
          <li key={movie.id}><MovieIndexItem movie={ movie }/></li>
        )) }
      </ul>
    </div>
  );
};

export default GenreList;
