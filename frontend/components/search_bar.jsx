import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as AppUtil from '../util/app_util';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      isHidden: true
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }


  updateSearch(e) {
    this.setState({ inputVal: e.target.value });
  }


  matches() {
    const { movies, genres } = this.props;
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return matches;
    }

    let movieTitle;
    let genreName;

    movies.forEach(movie => {
      movieTitle = movie.title.slice(0, this.state.inputVal.length);
      if (movieTitle.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(movie.title);
      }
    });

    genres.forEach(genre => {
      genreName = genre.name.slice(0, this.state.inputVal.length);
      if (genreName.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(genre.name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }



  selectName(event) {
    let item = event.target.innerText;
    this.setState({inputVal: item});
  }


  moveCursorToEnd(e) {
    let tempValue = e.target.value;
    e.target.value = '';
    e.target.value = tempValue;
  }


  render() {
     let results = this.matches().map((result, i) => {
      return (
        <li className="search-result" key={i} onClick={this.selectName}>{result}</li>
      );
    });

    const inputField = <input key={ AppUtil.uniqueKey(1) }
                              autoFocus
                              onFocus = {(e) => this.moveCursorToEnd(e)}
                              id="search-bar"
                              type="text"
                              placeholder= "Titles,genres"
                              onChange={ this.updateSearch }
                              value={ this.state.inputVal }/>;

    return(
        <div className="search-bar-container">
          {!this.state.isHidden &&
            <ReactCSSTransitionGroup
              transitionName="search"
              transitionAppear={true}
              transitionAppearTimeout={100}
              transitionEnter={false}
              transitionLeave={false}>
              { inputField }
            </ReactCSSTransitionGroup>
            }
            <ul id="search-results">
                {results}
            </ul>
            <FaSearch onClick={() => this.toggleHidden()} id="search-icon"/>
          </div>
    );
  }

}

export default SearchBar;
