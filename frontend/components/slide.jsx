import React from 'react';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import $ from 'jquery';


class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  openExpandingBlock() {
    const { genre, key } = this.props;
    const expandingBlock = document.getElementById(`expanding-block-${genre.id}`);
    $(expandingBlock).removeClass('hide-element');
    const currentSlide = document.getElementById(`slide-${key}`);
    $(currentSlide).css("border", "1px solid white");
  }

  render() {
    const { movie, key } = this.props;

    const movieBackground = {
      backgroundImage: `url(${movie.image_url})`,
    };

    return (
      <span className="slide" id={"slide-" + key} style={movieBackground}>
        <FaPlayCircleO className="slide-play-btn"/>
        <h2>{ movie.title }</h2>
        <div className="bottom-of-slide">
          { movie.blurb }
          <br/>
          <FaAngleDown onClick={ () => this.openExpandingBlock()}
                       className="expand-arrow"/>
        </div>
      </span>
    );
  }
}






export default Slide;
