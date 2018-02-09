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
    const carousel = document.getElementById(`carousel_results`);
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
    const allSlides = document.getElementsByClassName('slide');
    $(allSlides).css("border", "none");
    $(expandingBlock).addClass('hide-element').removeClass("display-flex");
    const currentSlide = $(expandingBlock).parent(".carousel-component")
                                          .children(".wrap").children('.window')
                                          .children(`#carousel_results`).children('.slide');
    $(currentSlide).css("border-width", "0");
    $(".white-caret-down").css("display", "none");
  }

  playMovie() {
    const { matchingMovies, ownProps } = this.props;
    const expandingBlock = document.getElementById(`expanding-block-results`);
    const movieTitle = $(expandingBlock).find("h2").text();

    let movieId;


    for(let i=0; i<matchingMovies.length; i++) {
      if (matchingMovies[i].title === movieTitle) {
        movieId = matchingMovies[i].id;
        break;
      }
    }
    
    return(
      ownProps.history.push(`/play/${movieId}`)
    );

  }

toggleAddMovieToList() {
  const { matchingMovies, createListMovie, deleteListMovie, currentUser } = this.props;
  const movies = matchingMovies;

  const expandingBlock = document.getElementById(`expanding-block-results`);
  const movieTitle =  $(expandingBlock).find("h2").text();

  const currentButtonText = $(".added-or-not").text();

  let movie;

  for(let j = 0; j < movies.length; j++) {
    if(movies[j].title === movieTitle) {
      movie = movies[j];
      break;
    }
  }

  if(currentButtonText.includes("+")) {
      createListMovie({ list_id: currentUser.id, movie_id: movie.id, user_id: currentUser.id })

          .then(res => {
            $(".added-or-not").html(
              "<span class='circle-check'> &#10004; </span>&nbsp; MY LIST"
            );
          }
        );
  } else {
      deleteListMovie(currentUser.id, movie.id)
          .then((response) => {
            $(".added-or-not").html(
              "<span class='circle-plus-2'> + </span>&nbsp; MY LIST"
            );
          });
  }
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
            <div className="window-results">
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
                <div className = "added-or-not" onClick={() => this.toggleAddMovieToList() }>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default MyResultsCarousel;
