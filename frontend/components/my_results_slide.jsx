import React from "react";
import FaAngleDown from "react-icons/lib/fa/angle-down";
import FaPlayCircleO from "react-icons/lib/fa/play-circle-o";
import FaPlay from "react-icons/lib/fa/play";
import $ from "jquery";
import { Link } from "react-router-dom";
import FaCaretDown from "react-icons/lib/fa/caret-down";

class MyResultsSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  openExpandingBlock() {
    const { movie, movies, specialId, listMovies } = this.props;
    const expandingBlock = document.getElementById(`expanding-block-results`);
    const currentSlide = document.getElementById(`slide-${specialId}`);
    const allSlides = document.getElementsByClassName("slide");

    $(".added-or-not").empty();
    $(allSlides).css("border", "none");
    $(".white-caret-down").css("display", "none");
    $(".expanding-block")
      .removeClass("display-flex")
      .addClass("hide-element");

    $(expandingBlock)
      .removeClass("hide-element")
      .addClass("display-flex");
    $(currentSlide).css({
      "border-color": "#FFF",
      "border-width": "5px",
      "border-style": "solid"
    });
    $(currentSlide)
      .find(".white-caret-down")
      .css("display", "block");
    $(".expanding-block-left-text").remove();
    $(expandingBlock).css({
      background: `linear-gradient(to right,
                            rgba(0,0,0,1), rgba(0,0,0,.8),
                            rgba(0, 0, 0, .1), transparent),
                            url('${movie.image_url}')`,
      "background-size": "cover",
      "background-position": "left"
    });

    const movieInMovies = (movieId, myMovies) => {
      for (let i = 0; i < myMovies.length; i++) {
        if (myMovies[i].id === movieId) {
          return "<span class='circle-check'> &#10004; </span>&nbsp; MY LIST";
        }
      }
      return "<span id='check' class='circle-plus'> + </span>&nbsp; MY LIST";
    };

    $(".expanding-block-left").prepend(
      `<div class="expanding-block-left-text">
              <h2>${movie.title}</h2>
              <div>${movie.year}</div>
              <p>${movie.blurb}</p>
            </div>`
    );

    $(".added-or-not").append(`${movieInMovies(movie.id, listMovies)}`);

    $("html, body").animate(
      {
        scrollTop: $(currentSlide).offset().top
      },
      400
    );
  }

  render() {
    const { movie, specialId } = this.props;

    const movieBackground = {
      backgroundImage: `url(${movie.image_url})`
    };

    return (
      <span
        className="slide"
        onClick={() => this.openExpandingBlock()}
        id={"slide-" + specialId}
        style={movieBackground}
      >
        <Link to={`/play/${movie.id}`}>
          <FaPlay className="slide-play-btn" />
        </Link>
        <h2>{movie.title}</h2>
        <div className="bottom-of-slide">
          <span className="slide-movie-blurb">{movie.blurb}</span>
          <br />
          <FaAngleDown className="expand-arrow" />
        </div>
        <span className="white-caret-down">
          <FaCaretDown />
        </span>
      </span>
    );
  }
}

export default MyResultsSlide;
