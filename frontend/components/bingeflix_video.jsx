import React from 'react';
import videojs from 'video.js';


class BingeFlixVideo extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, () => {
      console.log('onPlayerReady', this);
    });
  }

  showBackArrow() {
    const backArrow = document.getElementById("video-back-arrow");
    backArrow.classList.remove("hide-element");
  }

  hideBackArrow() {
    const backArrow = document.getElementById("video-back-arrow");
    setTimeout(() => backArrow.classList.add("hide-element"), 3000);
  }


  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM

  render() {
    const { movie } = this.props;
    return (
      <div data-vjs-player className="bingeflix-video-component">
        <video ref={ node => this.videoNode = node }
               className="video-js vjs-default-skin"
               preload="none"
               controls
               data-setup='{
                            "autoplay": true,
                            "preload": "auto",
                            "fluid": true,
                            "aspectRatio": "2:1"
                          }'
               onMouseOver={ () => this.showBackArrow()}
               onMouseOut={ () => this.hideBackArrow()}>
           <source src={ movie.video_url } type="video/mp4"/>
        </video>
      </div>
    );
  }
}

export default BingeFlixVideo;
