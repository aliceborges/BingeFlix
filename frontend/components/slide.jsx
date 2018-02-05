import React from 'react';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import $ from 'jquery';


class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  openExpandingBlock() {
    const { genre } = this.props;
    const expandingBlock = document.getElementById(`expanding-block-${genre.id}`);
    $(expandingBlock).removeClass('hide-element');
  }

  render() {
    const { movie } = this.props;

    const movieBackground = {
      backgroundImage: `url(${movie.image_url})`,
    };

    return (
      <span className="slide" style={movieBackground}>
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
