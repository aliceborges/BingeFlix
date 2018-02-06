import React from 'react';

class MoviePlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-play-component">
        <video>
          <source src="mov_bbb.mp4" type="video/mp4"/>
        </video>
      </div>
    );
  }

}

export default MoviePlay;
