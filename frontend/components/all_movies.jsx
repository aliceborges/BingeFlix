import React from 'react';
import LoadingIcon from './loading_icon';
import FeaturedMovie from './featured_movie';
import Carousel from './carousel';

class AllMovies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMovies();
    this.props.fetchGenres();
  }

  render() {
    const { movies, moviesLoading, genres, ownProps } = this.props;

      if(moviesLoading) {
        return <LoadingIcon />;
      }

      if(!movies) {
        return null;
      }

      return (
        <div>
          <FeaturedMovie movies = { movies }
                         numOfMovies = { movies.length }/>
          { genres.map((genre, idx) => (
            <Carousel key={idx} ownProps = { ownProps } genre={ genre }/>
          ))
          }
        </div>
      );
  }
}

export default AllMovies;
