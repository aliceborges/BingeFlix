import React from 'react';
import Navbar from './navbar';
import * as AppUtil from '../util/app_util';
import LoadingIcon from './loading_icon';
import FeaturedMovie from './featured_movie';
import Carousel from './carousel';
import { ProtectedRoute } from '../util/route_util';
import Footer from './footer';
import { Route, Switch } from 'react-router-dom';
import MyListContainer from './my_list_container';
import AllMoviesContainer from './all_movies_container';
import GenrePageContainer from './genre_page_container';
import SearchResultsContainer from './search_results_container';

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchingSearchResults: null
    };
    this.updateResults = this.updateResults.bind(this);
  }

  componentDidMount() {
    const { fetchList, currentUserId } = this.props;
    fetchList(currentUserId);
  }

  updateResults(results) {
    this.setState({matchingSearchResults: results});
  }

  render() {
    const { currentUserEmail, logout } = this.props;

    return (
        <div className="browse-page">
          <div className="inner-page">
            <Navbar logout={ logout } updateResults={ this.updateResults }
                    currentUserEmail={ currentUserEmail }/>
          </div>
          { this.props.ownProps.location.pathname.includes("search") ? (
            <SearchResultsContainer results = {this.state.matchingSearchResults}/>
          ) : (
            <Switch>
              <Route path="/browse/search/" component={ SearchResultsContainer }/>
              <Route path="/browse/my-list" component={ MyListContainer }/>
              {/* <Route path="/browse/tv" component={ GenrePageContainer }/>
              <Route path="/browse/movies" component={ GenrePageContainer }/>
              <Route path="/browse/originals" component={ GenrePageContainer }/> */}
              <Route path="/browse" component={ AllMoviesContainer }/>
            </Switch>
          )}
          <Footer />
        </div>
    );
  }
}

export default MoviesIndex;
