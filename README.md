# README
Bingeflix is a single-page, video-streaming app that allows users to create accounts, search through available videos, and add videos to their 'My List'. This app was built with a React/Redux front-end and a Rails back-end.

#### [LIVE DEMO](https://bingeflix.herokuapp.com/#/)
![](https://i.imgur.com/FUo8WKB.png)

## TECHNOLOGIES USED
 * Front-end
 ** React/Redux
 ** Video JS
 ** jQuery

 * Back-end
 ** Rails


## FEATURES
### Single Form for Sign Up / Sign In

### Infinite Sliding Carousels
<p align="center">
  <img style="display: inline-block;" src="https://media.giphy.com/media/xTht9ZnURmuoQEGzrW/giphy.gif"/>
  <img style="display: inline-block;" src="https://media.giphy.com/media/xUOwGjLI9dTuhhT62Q/giphy.gif"/>
</p>
The app's sliding carousel leverages the power and simplicity of jQuery's DOM manipulation for its sliding movement. On hover, each of the slides inside the carousel expands to show more information about that slide's video. This expanding effect is achieved through the CSS ':hover' selector.


### Single Expanding Block for Each Carousel
<p align="center">
  <img src="https://i.imgur.com/4okIOeH.jpg"/>
</p>
When a user clicks on one of the slides inside each carousel, a larger block of information appears below that carousel. Though at first it seemed easier to include an expanding block for each of the slides inside the carousel, I quickly realized that attaching the expanding block to each slide, in addition to being less performant, compromised the expanding hover effect of each individual slide. For those reasons, I determined that placing a single expanding block below each carousel was the best way to solve these issues and display the necessary information. Each time a slide is clicked, the expanding block is populated with the information for that slide.


### Streaming Videos
<p align="center">
  <img src="https://media.giphy.com/media/3o7WIQ6CpsslxL4Lq8/giphy.gif"/>
</p>


### Adding Videos to 'My List'
Each Bingeflix user has a 'My List' to which they can add and from which they can delete videos. Adding videos to one's list is as simple as clicking on the '+' icon. similarly, removing each video is achieved by clicking the checkmark next to 'MY LIST'.


### Live Search
<p align="center">
  <img src="https://media.giphy.com/media/xThtamghBNxFbwSrRe/giphy.gif"/>
</p>
