import React from 'react';
import Slide from './slide';
import $ from 'jquery';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import * as AppUtil from '../util/app_util';
import ExpandingBlock from './expanding_block';
import FaClose from 'react-icons/lib/fa/close';

class Carousel extends React.Component {
  constructor(props){
    super(props);
  }

  shiftSlide(direction) {
    const slideWidth = 250;
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
    $(expandingBlock).addClass('hide-element');
    const currentSlide = $(expandingBlock).parent().prev(".wrap").closest('.window').closest(`#carousel_${genre.id}`).closest('.slide');
    $(currentSlide).css("border-width", "0");
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
        <div className="hide-element" id={"expanding-block-" + genre.id}>
          <FaClose onClick={() => this.closeExpandingBlock()} className="window-close-x"/>
        </div>
      </div>
    );
  }
}

export default Carousel;
