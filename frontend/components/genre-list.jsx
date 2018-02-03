import React from 'react';
import MovieIndexItem from './movie_index_item';

const GenreList = props => {
  return (
    <div className="genre-list">
      <h2 className="genre-name">{ props.genre.name }</h2>
      <ul className="movie-index-container">
        { props.genre.movies.slice(0, 7).map(movie => (
          <li key={ movie.id }><MovieIndexItem movie={ movie }/></li>
        )) }
      </ul>
    </div>
  );
};

export default GenreList;
