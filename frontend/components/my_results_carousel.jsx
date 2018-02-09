import React from 'react';
import $ from 'jquery';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import * as AppUtil from '../util/app_util';
import FaClose from 'react-icons/lib/fa/close';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import { Redirect } from 'react-router-dom';
import FaCheck from 'react-icons/lib/fa/check';
import MyResultsSlide from './my_results_slide';


class MyResultsCarousel extends React.Component {
  constructor(props){
    super(props);
  }

  shiftSlide(direction) {
    const slideWidth = 254;
    const carousel = document.getElementById(`carousel_my_list`);
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
    const expandingBlock = document.getElementById(`expanding-block-results`);
    $(expandingBlock).addClass('hide-element').removeClass("display-flex");
    const currentSlide = $(expandingBlock).parent(".carousel-component")
                                          .children(".wrap").children('.window')
                                          .children(`#carousel_results`).children('.slide');
    $(currentSlide).css("border-width", "0");
    $(currentSlide).find(".white-caret-down").css("display", "none");
  }

  playMovie() {
    const { matchingMovies, ownProps } = this.props;
    const expandingBlock = document.getElementById(`expanding-block-results`);
    const movieTitle = $(expandingBlock).find("h2").text();

    let movieId;
    console.warn(matchingMovies);
    for(let i=0; i<matchingMovies.length; i++) {
      if (matchingMovies[i].title === movieTitle) {
        movieId = matchingMovies[i].movie_id;
        break;
      }
    }
    // console.warn(movieId);
    return(
      ownProps.history.push(`/play/${movieId}`)
    );

  }



  removeMovieFromList() {
    const { matchingMovies, deleteListMovie, currentUser } = this.props;

    const expandingBlock = document.getElementById(`expanding-block-my-list`);
    const movieTitle =  $(expandingBlock).find("h2").text();

    let movie;

    for(let j = 0; j < matchingMovies.length; j++) {
      if(matchingMovies[j].title === movieTitle) {
        movie = matchingMovies[j];
        break;
      }
    }

    deleteListMovie(currentUser.id, movie.movie_id)
        .then((response) => {
          console.warn("removed it!");
          this.closeExpandingBlock();
        });
  }

  render() {
    const { createListMovie, matchingMovies,
            currentUser, listMovies } = this.props;

    if(matchingMovies.length === 0) {
      return null;
    }
    return (
        <div className="carousel-component">
          <h2>Search Results</h2>
          <div className="wrap">
            <div className="window-my-list">
              <span id={ "prev_results" }
                onClick={ () => this.shiftSlide(1) }>
                <FaAngleLeft className="scroll-arrow"/>
              </span>
              <div id={ "carousel_results" }>
                { matchingMovies.map((movie, idx) => (
                  <MyResultsSlide key={ AppUtil.uniqueKey(idx) }
                    listId = { currentUser.id }
                    specialId={ AppUtil.uniqueKey(idx) }
                    movie ={ movie }
                    listMovies = { listMovies }
                    movies = { matchingMovies }/>
                  ))}
                </div>
                <span id={"next_results"}
                  onClick={() => this.shiftSlide(-1)}>
                  <FaAngleRight className="scroll-arrow"/>
                </span>
              </div>
            </div>
            <div className="hide-element expanding-block" id={ "expanding-block-results" }>
              <FaClose onClick={ () => this.closeExpandingBlock() } className="window-close-x"/>
              <FaPlayCircleO onClick={ () => this.playMovie() } className="expanding-block-play-btn"/>
              <div className='expanding-block-left'>
                <span className="circle-check" onClick = {() => this.removeMovieFromList()}>
                  &#10004; &nbsp; MY LIST
                </span>
              </div>
            </div>
          </div>
    );
  }
}

export default MyResultsCarousel;
