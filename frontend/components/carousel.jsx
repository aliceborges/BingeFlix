import React from 'react';
import Slide from './slide';
import $ from 'jquery';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

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
        $(carousel).children('.slide:first').before($(carousel).children('.slide:last'));
      } else if (direction === -1) {
          $(carousel).children('.slide:last').after($(carousel).children('.slide:first'));
      }
      carousel.classList.remove('transition');
      carousel.style.transform = 'translateX(0px)';
    }, 700);
  }


  render() {
    const { genre } = this.props;

    return (
      <div className="carousel-component">
        <h2>{ genre.name }</h2>
        <div className="wrap" id="window">
          <div className="window">
            <span id={"prev_" + genre.id} onClick={() => this.shiftSlide(-1)}><FaAngleLeft className="scroll-arrow"/></span>
            <div id={"carousel_" + genre.id}>
              { genre.movies.map(movie => (
                <Slide movie={ movie }/>
              ))}
            </div>
            <span id={"next_" + genre.id} onClick={() => this.shiftSlide(1)}><FaAngleRight className="scroll-arrow"/></span>
          </div>
        </div>
      </div>
    );


  }
}

export default Carousel;
