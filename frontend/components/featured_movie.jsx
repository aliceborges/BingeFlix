import React from 'react';
import { Link } from 'react-router-dom';
import FaCheck from 'react-icons/lib/fa/check';


class FeaturedMovie extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      buttonSign: "plus",
      listMovieId: null
    };
  }

  // randomNumFromOneTo() {
  //   const { numOfMovies } = this.props;
  //   return Math.floor(Math.random() * numOfMovies);
  // }

  componentWillMount() {
    this.props.fetchListMovies();
    const {movies, listMovies} = this.props;
    const movie = movies[21];
    console.warn(movie);
    for(let i = 0; i < listMovies.length; i++) {
      if (listMovies[i].movie_id === movie.id) {
        this.setState({buttonSign: "check", listMovieId: listMovies[i].id});
      }
    }

  }

  toggleAddMovieToList() {
    const { createListMovie, deleteListMovie, listId, movies, currentUser } = this.props;
    const movie = movies[21];
    if(this.state.buttonSign === "plus") {
      createListMovie({ list_id: listId, movie_id: movie.id, user_id: currentUser.id })
          .then(({listMovie}) => {
            this.setState({listMovieId: listMovie.id});
          } );
      this.setState({buttonSign: "check"});
      console.warn("added it!");
    } else {
      deleteListMovie(this.state.listMovieId);
      this.setState({buttonSign: "plus"});
      console.warn("removed it!");
    }
  }

  render() {
    const { movies } = this.props;
    // const idx = this.randomNumFromOneTo();
    const movie = movies[21];
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
              <button onClick = {() => this.toggleAddMovieToList()} className="my-list-button">
                {this.state.buttonSign === "plus" ? (
                  <span id="plus-sign">+</span>
                ) : (
                  <span><FaCheck id="check"/></span>
                )}
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
