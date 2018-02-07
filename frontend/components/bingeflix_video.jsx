import React from 'react';
import videojs from 'video.js';
import $ from 'jquery';


class BingeFlixVideo extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, () => {
      console.log('onPlayerReady', this);
    });

    const backArrow = document.getElementById("video-back-arrow");

    const showArrow = () => {
      backArrow.classList.remove("hide-element");
      setTimeout( () => {
        backArrow.classList.add("hide-element");
      }, 15000);
    };

    $(document).on("mousemove", showArrow);

  }


  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM

  render() {
    const { movie } = this.props;
    return (
      <div data-vjs-player className="bingeflix-video-component">
        <video ref={ node => this.videoNode = node }
               id="current-video"
               className="video-js vjs-default-skin"
               controls
               autoplay
               data-setup='{"autoplay": true,
                            "preload": "auto",
                            "fluid": true,
                            "aspect-ratio": "2:1"}'>
           <source src={ movie.video_url } type="video/mp4"/>
        </video>
      </div>
    );
  }
}

export default BingeFlixVideo;
