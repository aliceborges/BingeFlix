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


          <Navbar logout={this.props.logout}
                  currentUserEmail={this.props.currentUserEmail}/>
          <section className="featured-movie">
            <div className="title-blurb-container">
              <h1 className="featured-title">
                The
                <br/>
                Mighty<br/>
                Avocado
              </h1>
              <br/>
              <ul className="year-genre-container">
                <li className="feature-year">2017</li>
                <li className="feature-genre">documentary</li>
              </ul>
              <p className="featured-blurb">
                Learn about the healing powers
                <br/>
                of this tasty superfood
              </p>
              <br/>
              <div className="feature-buttons">
                <button className="play-button">Play</button>
                  &nbsp;
                  &nbsp;
                <button className="my-list-button"><span id="plus-sign">+</span>
                &nbsp; My List</button>


              </div>
            </div>
          </section>

          <ul className="movie-index-container">
            { this.props.movies.map(movie => (
              <MovieIndexItem movie={ movie }/>
          )) }
          </ul>

        </div>
      </div>
    );
  }
}

export default MoviesIndex;
