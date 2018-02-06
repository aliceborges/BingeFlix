import React from 'react';
import LoadingIcon from './loading_icon';
import BingeFlixVideo from './bingeflix_video';
import FaArrowCircleOLeft from 'react-icons/lib/fa/arrow-circle-o-left';


class MoviePlay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.movieId !== nextProps.match.params.movieId) {
      this.props.fetchMovie(nextProps.match.params.movieId);
    }
  }

  goBack(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  render() {
    const { movie } = this.props;

    if (this.props.loading) {
      return (
        <div className="movie-play-component">
          <LoadingIcon />
        </div>
      );
    }
    if(!this.props.movie) {
      return null;
    }
    return (
      <div className="movie-play-component">
        <FaArrowCircleOLeft id="video-back-arrow"
                            className="hide-element"
                            onClick={(e) => this.goBack(e)} />
        <span id="back-to-browse">
          Back to Browse
        </span>
        <BingeFlixVideo movie ={ movie }/>
      </div>
    );
  }

}

export default MoviePlay;
