import React from 'react';
import { Link } from 'react-router-dom';


class FeaturedMovie extends React.Component {
  constructor(props){
    super(props);
  }

  // randomNumFromOneTo() {
  //   const { numOfMovies } = this.props;
  //   return Math.floor(Math.random() * numOfMovies);
  // }

  addMovieToList() {
    const { createListMovie, listId, movies } = this.props;
    const movie = movies[19];
    createListMovie({ list_id: listId, movie_id: movie.id });
    console.warn("did it!");
  }

  render() {
    const { movies } = this.props;
    // const idx = this.randomNumFromOneTo();
    const movie = movies[19];
    return (
      movie ?
        <section className="featured-movie"
          style={ { background: `linear-gradient(to right,
            rgba(0,0,0,1), rgba(0,0,0,.98),
            rgba(0, 0, 0, .1), transparent),
            url(${movie.image_url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat'
          } }>
          <div className="title-blurb-container">
            <h1 className="featured-title">
              { movie.title }
            </h1>
            <br/>
            <p className="featured-blurb">
              { movie.blurb }
            </p>
            <br/>
            <div className="feature-buttons">
              <Link to={`/play/${movie.id}`}>
                <button className="play-button">Play</button>
              </Link>
              &nbsp; &nbsp;
              <button onClick = {() => this.addMovieToList()} className="my-list-button">
                <span id="plus-sign">+</span>
                &nbsp; My List
              </button>
            </div>
          </div>
        </section>
      :
      null
    );
  }
}

export default FeaturedMovie;
