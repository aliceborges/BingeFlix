import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props) ;
  }

  render() {
    return(
      <div>
        <ul className="search-bar-icon-container">
          <li><input className="search-bar"
                type="text"
                placeholder="Titles, genres"/>
          </li>
          <li className="font-awesome-search">
            <i className="fas fa-search"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchBar;
