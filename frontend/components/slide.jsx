import React from 'react';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import $ from 'jquery';


class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  openExpandingBlock() {
    const { genre, specialId, movie } = this.props;
    const expandingBlock = document.getElementById(`expanding-block-${genre.id}`);
    const currentSlide = document.getElementById(`slide-${specialId}`);
    const allSlides = document.getElementsByClassName('slide');

    $(allSlides).css("border", "none");

    $(".expanding-block").removeClass("display-flex").addClass("hide-element");

    $(expandingBlock).removeClass('hide-element').addClass("display-flex");
    $(currentSlide).css({"border-color": "#FFF",
                         "border-width": "5px",
                         "border-style": "solid"});
    $('.expanding-block-left').remove();
    $(expandingBlock).css({"background": `linear-gradient(to right,
                            rgba(0,0,0,1), rgba(0,0,0,.8),
                            rgba(0, 0, 0, .1), transparent),
                            url('${movie.image_url}')`,
                          "background-size": "cover",
                          "background-position": "left"});
    $(expandingBlock).append(
            `<div class='expanding-block-left'>
                <h2>${movie.title}</h2>
                <div>${movie.year}</div>
                <p>${movie.blurb}</p>
                <div class="expanding-block-my-list">
                  <span class="circle-plus"> + </span>
                   &nbsp; MY LIST
                </div>
            </div>`
    );
  }

  render() {
    const { movie, specialId } = this.props;

    const movieBackground = {
      backgroundImage: `url(${movie.image_url})`,
    };

    return (
      <span className="slide" id={"slide-" + specialId} style={movieBackground}>
        <FaPlayCircleO className="slide-play-btn"/>
        <h2 onClick={ () => this.openExpandingBlock()}>{ movie.title }</h2>
        <div className="bottom-of-slide" onClick={ () => this.openExpandingBlock()}>
          { movie.blurb }
          <br/>
          <FaAngleDown className="expand-arrow"/>
        </div>
      </span>
    );
  }
}






export default Slide;
