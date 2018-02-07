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

class Carousel extends React.Component {
  constructor(props){
    super(props);
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
    const currentSlide = $(expandingBlock).parent(".carousel-component")
                                          .children(".wrap").children('.window')
                                          .children(`#carousel_${genre.id}`).children('.slide');
    $(currentSlide).css("border-width", "0");
  }

  linkToMovie() {
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
    console.warn();
    return(
      ownProps.history.push(`/play/${movieId}`)
    );

  }

  render() {
    const { genre } = this.props;

    return (
      <div className="carousel-component">
        <h2>{ genre.name }</h2>
        <div className="wrap">
          <div className="window">
            <span id={"prev_" + genre.id}
                  onClick={() => this.shiftSlide(1)}>
                  <FaAngleLeft className="scroll-arrow"/>
            </span>
            <div id={"carousel_" + genre.id}>
              { genre.movies.map((movie, idx) => (
                  <Slide key={AppUtil.uniqueKey(idx)} specialId={AppUtil.uniqueKey(idx)} genre={genre} movie={ movie }/>
              ))}
            </div>
            <span id={"next_" + genre.id}
                  onClick={() => this.shiftSlide(-1)}>
                  <FaAngleRight className="scroll-arrow"/>
            </span>
          </div>
        </div>
        <div className="hide-element expanding-block" id={"expanding-block-" + genre.id}>
          <FaClose onClick={() => this.closeExpandingBlock()} className="window-close-x"/>
            <FaPlayCircleO onClick={() => this.linkToMovie()} className="expanding-block-play-btn"/>
        </div>
      </div>
    );
  }
}

export default Carousel;
