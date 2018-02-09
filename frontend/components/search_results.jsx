import React from 'react';
import MyListCarousel from './my_list_carousel';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.warn("this.props.results = ", this.props.results);
    console.warn("this.props = ", this.props);
    return(
      <div className = "genre_page_setup">
        Hello there :)
        I don't know ya but I really should
      </div>
    );
  }
}

export default SearchResults;
