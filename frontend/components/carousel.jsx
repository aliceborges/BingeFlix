import React from 'react';
import Slide from './slide';
import $ from 'jquery';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import * as AppUtil from '../util/app_util';
import ExpandingBlock from './expanding_block';
import FaClose from 'react-icons/lib/fa/close';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import { Redirect } from 'react-router-dom';
import FaCheck from 'react-icons/lib/fa/check';
import ButtonSign from './button_sign';


class Carousel extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   listMovieId: null
    // };
  }

  componentWillMount() {
    this.props.fetchListMovies();
  //   // const movie = movies[21];
  //   // console.warn(movie);
  //   // const movie - $()
  }
  //
  // componentDidMount() {
  //   const { genre, listMovies, createListMovie,
  //           deleteListMovie, currentUser, listId } = this.props;
  //
  //   $(document).on("click", () => {
  //     const movies = genre.movies;
  //
  //     const expandingBlock = document.getElementById(`expanding-block-${genre.id}`);
  //     const movieTitle =  $(expandingBlock).find("h2").text();
  //     // console.warn(movieTitle);
  //     if (movieTitle) {
  //       let movie;
  //       for(let j = 0; j < genre.movies.length; j++) {
  //         if(genre.movies[j].title === movieTitle) {
  //           movie = genre.movies[j];
  //           break;
  //         }
  //       }
  //       // console.warn(movie);
  //       console.warn(listMovies);
  //       if(movie) {
  //         for(let i = 0; i < listMovies.length; i++) {
  //           if (listMovies[i].movie_id === movie.id) {
  //             this.setState({buttonSign: "check", listMovieId: listMovies[i].id});
  //           }
  //         }
  //       }
  //     }
  //   });
  // }

  toggleAddMovieToList() {
    // this.props.fetchListMovies();
    const { genre, listMovies, createListMovie, deleteListMovie, currentUser, listId } = this.props;
    const movies = genre.movies;

    const expandingBlock = document.getElementById(`expanding-block-${genre.id}`);
    const movieTitle =  $(expandingBlock).find("h2").text();
    console.warn(movieTitle);

    const currentButtonText = $(".added-or-not").text();
    console.warn(currentButtonText);

    let movie;

    for(let j = 0; j < genre.movies.length; j++) {
      if(genre.movies[j].title === movieTitle) {
        movie = genre.movies[j];
        break;
      }
    }

    let listMovieId;

    if(currentButtonText.includes("+")) {
      // console.warn("hello" + currentUser.id);
        createListMovie({ list_id: listId, movie_id: movie.id, user_id: currentUser.id })
            // .then(({listMovie}) => {
            //   // this.setState({listMovieId: listMovie.id});
            // } )
            .then(res => {
              $(".added-or-not").html(
                "<span class='circle-check'> &#10004; </span>&nbsp; MY LIST"
              );
              // this.setState({buttonSign: "check"});
              console.warn("added it!");
            }
          );
    } else {
        deleteListMovie(currentUser.id, movie.id)
            .then((response) => {
              $(".added-or-not").html(
                "<span class='circle-plus'> + </span>&nbsp; MY LIST"
              );
              // this.setState({buttonSign: "plus"});
              console.warn("removed it!");
            });
    }
  }

  shiftSlide(direction) {
    const slideWidth = 254;
    const { genre } = this.props;
    const carousel = document.getElementById(`carousel_${genre.id}`);
    if(carousel.classList.contains('transition')) return;
    carousel.classList.add('transition');
    carousel.style.transform = `translateX(${direction * slideWidth}px)`;

    setTimeout(() => {
      if (direction === 1) {
        $(carousel).children('.slide:first')
                   .before($(carousel)
                   .children('.slide:last'));
      } else if (direction === -1) {
          $(carousel).children('.slide:last')
                     .after($(carousel)
                     .children('.slide:first'));
      }
      carousel.classList.remove('transition');
      carousel.style.transform = 'translateX(0px)';
    }, 700);
  }

  closeExpandingBlock() {
    const { genre } = this.props;
    const expandingBlock = document.getElementById(`expanding-block-${genre.id}`);
    $(expandingBlock).addClass('hide-element').removeClass("display-flex");
    $(".added-or-not").empty();
    const currentSlide = $(expandingBlock).parent(".carousel-component")
                                          .children(".wrap").children('.window')
                                          .children(`#carousel_${genre.id}`).children('.slide');
    $(currentSlide).css("border-width", "0");
    $(currentSlide).find(".white-caret-down").css("display", "none");
  }

  playMovie() {
    const { genre, ownProps } = this.props;
    const expandingBlock = document.getElementById(`expanding-block-${genre.id}`);
    const movieTitle = $(expandingBlock).find("h2").text();
    let movieId;

    for(let i=0; i<genre.movies.length; i++) {
      if (genre.movies[i].title === movieTitle) {
        movieId = genre.movies[i].id;
        break;
      }
    }
    return(
      ownProps.history.push(`/play/${movieId}`)
    );

  }

  render() {
    const { genre, listId, createListMovie, listMovies, fetchListMovies } = this.props;

      // let buttonSignProp;
      // if(this.state.buttonSign === "plus") {
      //   buttonSignProp = "check";
      // } else if(this.state.buttonSign === "check") {
      //   buttonSignProp = "plus";
      // } else {
      //   buttonSignProp = "null";
      // }

    return (
      <div className="carousel-component">
        <h2>{ genre.name }</h2>
        <div className="wrap">
          <div className="window">
            <span id={ "prev_" + genre.id }
                  onClick={ () => this.shiftSlide(1) }>
                  <FaAngleLeft className="scroll-arrow"/>
            </span>
            <div id={ "carousel_" + genre.id }>
              { genre.movies.map((movie, idx) => (
                  <Slide key={ AppUtil.uniqueKey(idx) } listId = { listId }
                         specialId={ AppUtil.uniqueKey(idx) }
                         genre={ genre }
                         movie={ movie }
                         listMovies = { listMovies }
                         fetchListMovies = { fetchListMovies }/>
              ))}
            </div>
            <span id={"next_" + genre.id}
                  onClick={() => this.shiftSlide(-1)}>
                  <FaAngleRight className="scroll-arrow"/>
            </span>
          </div>
        </div>
        <div className="hide-element expanding-block" id={ "expanding-block-" + genre.id }>
          <FaClose onClick={ () => this.closeExpandingBlock() } className="window-close-x"/>
          <FaPlayCircleO onClick={ () => this.playMovie() } className="expanding-block-play-btn"/>
          <div className='expanding-block-left'>
            <div className = "added-or-not" onClick={() => this.toggleAddMovieToList() }>
              {/* <ButtonSign sign={buttonSignProp}/> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
