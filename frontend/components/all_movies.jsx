import React from 'react';
import LoadingIcon from './loading_icon';
import FeaturedMovieContainer from './featured_movie_container';
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
    const { movies, moviesLoading, genres,
            ownProps, fetchListMovies,
            createListMovie, listMovies, currentUser,
            deleteListMovie } = this.props;

      if(moviesLoading) {
        return <LoadingIcon />;
      }

      if(!movies) {
        return null;
      }

      return (
        <div>
          <FeaturedMovieContainer />
          { genres.map((genre, idx) => (
            <Carousel key={idx}
                         ownProps = { ownProps }
                         genre={ genre }
                         currentUser = { currentUser }
                         createListMovie = { createListMovie }
                         fetchListMovies = { fetchListMovies }
                         listMovies = { listMovies }
                         deleteListMovie = { deleteListMovie }/>
          ))
          }
        </div>
      );
  }
}

export default AllMovies;
