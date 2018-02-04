import React from 'react';

const Slide = ({ movie }) => {
  const movieBackground = {
    backgroundImage: `url(${movie.image_url})`,
  };

  return (
    <span className="slide" style={movieBackground}>{ movie.title }</span>
  );
};

export default Slide;
