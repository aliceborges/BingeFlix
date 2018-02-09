import React from 'react';
import MyListCarousel from './my_list_carousel';
import LoadingIcon from './loading_icon';
import MyResultsCarousel from './my_results_carousel';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { ownProps, currentUser, createListMovie, fetchListMovies,
            movies, deleteListMovie, listMovies } = this.props;
    if(this.props.results === null) {
      return (
        <div className = "my-list-component genre-page-setup">
          <MyResultsCarousel ownProps = { ownProps }
                     currentUser = { currentUser }
                     createListMovie = { createListMovie }
                     fetchListMovies = { fetchListMovies }
                     deleteListMovie = { deleteListMovie }
                     matchingMovies = { movies }
                     listMovies = { listMovies }
                     ownProps = { ownProps }/>
        </div>
      );
    }
    if(this.props.results[0] === "No matches") {
      return(
        <div className = "search-results-component genre-page-setup">
          <p>Your search does not match any results</p>
        </div>
      );
    }
    return(
      <div className = "my-list-component genre-page-setup">
        <MyResultsCarousel ownProps = { ownProps }
                   currentUser = { currentUser }
                   createListMovie = { createListMovie }
                   fetchListMovies = { fetchListMovies }
                   deleteListMovie = { deleteListMovie }
                   matchingMovies = { this.props.results }
                   listMovies = { listMovies }
                   ownProps = { ownProps }/>
      </div>
    );
  }
}

export default SearchResults;
