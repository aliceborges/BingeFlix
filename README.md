# README
Bingeflix is a single-page, video-streaming app that allows users to create accounts, search through available videos, and add videos to their 'My List'. This app was built with a React/Redux front-end and a Rails back-end.

#### [LIVE DEMO](https://bingeflix.herokuapp.com/#/)
![](https://i.imgur.com/FUo8WKB.png)


## FEATURES
### Single Form for Sign Up / Sign In
Both signing up and signing in are displayed in a single form handled by the 'SessionForm' component. The SessionFormContainer checks whether the current path is '/login' or '/signup' and passes that information down to the SessionForm.

In the SessionFormContainer file:
```javascript
 const mapStateToProps = (state, ownProps) => {
   const formType = ownProps.location.pathname.slice(1);
   ...
  }
```
The result of `formType` will either be 'login' or 'signup,' and that will determine what is rendered in SessionForm.


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
When a user clicks on one of the slides in a carousel, a larger block of information appears below that carousel. Though at first it seemed easier for each slide to have its own expanding block, I quickly realized that attaching the expanding block to each slide, in addition to being less performant, compromised the expanding hover effect of each individual slide. For those reasons, I determined that placing a single expanding block below each carousel was the best way to solve these issues and display the necessary information. Each time a slide is clicked, the expanding block is populated with the information for that slide.


### Streaming Videos
<p align="center">
  <img src="https://media.giphy.com/media/3o7WIQ6CpsslxL4Lq8/giphy.gif"/>
</p>
To stream videos, this app makes use of Video.js's player framework. Custom settings were added to the default Video.js player merely by editing the player's CSS file. The result of either action is an Ajax call to the back-end which persists the change to the database.


### Adding Videos to 'My List'
Each Bingeflix user has a 'My List' to which they can add and from which they can delete videos. Adding videos to one's list is as simple as clicking on the '+' icon. similarly, removing each video is achieved by clicking the checkmark icon.


### Live Search
<p align="center">
  <img src="https://media.giphy.com/media/3ohs4p9LMXYBptIapW/giphy.gif"/>
</p>
Users can search videos by title and view a live update of matching results with each character that is typed into, or deleted from, the search bar's input field.

### Profiles (Future Feature)
A user will be able to add multiple profiles to their account. This feature will also allow the deletion of profiles as well as the editing of the profiles' names after they are added.
