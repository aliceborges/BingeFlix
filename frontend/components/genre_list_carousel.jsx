import React from 'react';
import $ from 'jquery';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import * as AppUtil from '../util/app_util';
import FaClose from 'react-icons/lib/fa/close';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import { Redirect } from 'react-router-dom';
import GenreListSlide from './my_list_slide';


class GenreListCarousel extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchMovies();
    this.props.fetchGenres();
  }

  shiftSlide(direction) {
    const {listMovies} = this.props;
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
    const expandingBlock = document.getElementById(`expanding-block-my-list`);
    $(expandingBlock).addClass('hide-element').removeClass("display-flex");
    const currentSlide = $(expandingBlock).parent(".carousel-component")
                                          .children(".wrap").children('.window')
                                          .children(`#carousel_my_list`).children('.slide');
    $(currentSlide).css("border-width", "0");
    $(currentSlide).find(".white-caret-down").css("display", "none");
  }

  playMovie() {
    const { listMovies, ownProps } = this.props;
    const expandingBlock = document.getElementById(`expanding-block-my-list`);
    const movieTitle = $(expandingBlock).find("h2").text();

    let movieId;

    for(let i=0; i<listMovies.length; i++) {
      if (listMovies[i].title === movieTitle) {
        movieId = listMovies[i].id;
        break;
      }
    }
    return(
      ownProps.history.push(`/play/${movieId}`)
    );

  }

  // refreshPage(){
  //   window.location.reload();
  // }


  removeMovieFromList() {
    const { listMovies, deleteListMovie, currentUser } = this.props;
    const movies = listMovies;

    const expandingBlock = document.getElementById(`expanding-block-my-list`);
    const movieTitle =  $(expandingBlock).find("h2").text();

    let movie;

    for(let j = 0; j < listMovies.length; j++) {
      if(listMovies[j].title === movieTitle) {
        movie = listMovies[j];
        break;
      }
    }

    deleteListMovie(currentUser.id, movie.movie_id)
        .then((response) => {
          console.warn("removed it!");
          this.closeExpandingBlock();
          // this.refreshPage();
        });
  }

  render() {
    const { createListMovie, listMovies,
            fetchListMovies, currentUser } = this.props;
    if(listMovies.length === 0) {
      return(
        <div className="carousel-component">
          <h2>My List</h2>
          <span className="no-movies-message">
            There are no movies in your list.
          </span>
        </div>
      );
    }
    return (
        <div className="carousel-component">
          <h2>My List</h2>
          <div className="wrap">
            <div className="window">
              <span id={ "prev_my_list" }
                onClick={ () => this.shiftSlide(1) }>
                <FaAngleLeft className="scroll-arrow"/>
              </span>
              <div id={ "carousel_my_list" }>
                { listMovies.map((movie, idx) => (
                  <MyListSlide key={ AppUtil.uniqueKey(idx) }
                    listId = { currentUser.id }
                    specialId={ AppUtil.uniqueKey(idx) }
                    movie={ movie }
                    listMovies = { listMovies }
                    fetchListMovies = { fetchListMovies }/>
                  ))}
                </div>
                <span id={"next_my_list"}
                  onClick={() => this.shiftSlide(-1)}>
                  <FaAngleRight className="scroll-arrow"/>
                </span>
              </div>
            </div>
            <div className="hide-element expanding-block" id={ "expanding-block-my-list" }>
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

export default GenreListCarousel;
