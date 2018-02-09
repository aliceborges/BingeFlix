import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as AppUtil from '../util/app_util';
import SearchResults from './search_results';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      isHidden: true,
      results: null
    };
  }
  componentDidMount() {
    this.props.fetchMovies();
  }


  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }


  updateSearch(e) {
    this.setState({ inputVal: e.target.value }, () => {
      if(this.state.inputVal.length > 0 && this.props.ownProps.location.pathname !== "/browse/search") {
        this.props.history.push(`/browse/search`);
      }
      this.props.updateResults(this.matches());
    });
  }


  matches() {
    const { movies } = this.props;
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return matches;
    }


    movies.forEach(movie => {
      if (movie.title.toLowerCase().includes(this.state.inputVal.toLowerCase())) {
        matches.push(movie);
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
        <li className="search-result" key={i} onClick={() => this.selectName()}>{result}</li>
      );
    });

    const inputField = <input key={ AppUtil.uniqueKey(1) }
                              autoFocus
                              onFocus = {(e) => this.moveCursorToEnd(e)}
                              id="search-bar"
                              type="text"
                              onKeyDown= { (e) => this.updateSearch(e)}
                              placeholder= "Search for titles..."
                              onChange={(e) => this.updateSearch(e) }
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
            <FaSearch onClick={() => this.toggleHidden()} id="search-icon"/>
          </div>
    );
  }

}

export default withRouter(SearchBar);
