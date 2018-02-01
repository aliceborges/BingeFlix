import React from 'react';
import Navbar from './navbar';
import MovieIndexItem from './movie_index_item';

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {

    return (
      <div className="browse-page">
        <div className="inner-page">
          <Navbar logout={this.props.logout}/>

          <section className="featured-image">
          </section>

          <ul className="movie-index-container">
            { this.props.movies.map(movie => (
            <li key={movie.id}>
              <MovieIndexItem />
            </li>)) }
          </ul>

        </div>
      </div>
    );
  }
}

export default MoviesIndex;
