import React from 'react';
import $ from 'jquery';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import * as AppUtil from '../util/app_util';
import FaClose from 'react-icons/lib/fa/close';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import { Redirect } from 'react-router-dom';
import FaCheck from 'react-icons/lib/fa/check';
import MyListSlide from './my_list_slide';


class MyListCarousel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      changed: "nothing"
    };
  }

  componentWillMount() {
    this.props.fetchListMovies();
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
    const expandingBlock = document.getElementById(`expanding-block-my-list`);
    $(expandingBlock).addClass('hide-element').removeClass("display-flex");
    const currentSlide = $(expandingBlock).parent(".carousel-component")
                                          .children(".wrap").children('.window')
                                          .children(`#carousel_my_list`).children('.slide');
    $(currentSlide).css("border-width", "0");
    $(currentSlide).find(".white-caret-down").css("display", "none");
  }

  playMovie() {
    const { myMovies, ownProps } = this.props;
    const expandingBlock = document.getElementById(`expanding-block-my-list`);
    const movieTitle = $(expandingBlock).find("h2").text();

    let movieId;

    for(let i=0; i<myMovies.length; i++) {
      if (myMovies[i].title === movieTitle) {
        movieId = myMovies[i].id;
        break;
      }
    }
    return(
      ownProps.history.push(`/play/${movieId}`)
    );

  }

  removeMovieFromList() {
    const { myMovies, deleteListMovie, currentUser } = this.props;
    const movies = myMovies;

    const expandingBlock = document.getElementById(`expanding-block-my-list`);
    const movieTitle =  $(expandingBlock).find("h2").text();
    console.warn(movieTitle);

    let movie;

    for(let j = 0; j < myMovies.length; j++) {
      if(myMovies[j].title === movieTitle) {
        movie = myMovies[j];
        break;
      }
    }

    deleteListMovie(currentUser.id, movie.id)
        .then((response) => {
          console.warn("removed it!");
          if(this.state.changed === "nothing"){
            this.setState({changed: "something"});
          } else {
            this.setState({changed: "nothing"});
          }
        });
  }

  render() {
    const { createListMovie, listMovies, myMovies,
            fetchListMovies, currentUser } = this.props;
    if(myMovies.length === 0) {
      return(
        <div className="carousel-component">
          <h2>My List</h2>
          <span className="no-movies-message">
            You have not added any movies to your list yet.
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
                { myMovies.map((movie, idx) => (
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

export default MyListCarousel;
