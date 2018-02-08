import React from 'react';
import MyListCarousel from './my_list_carousel';


class MyList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchListMovies();
  }

  render() {
    const { listMovies, currentUser, createListMovie, myMovies,
            fetchListMovies, deleteListMovie, ownProps } = this.props;
            console.warn(listMovies);

    return(
      <div className="my-list-component inner-page genre-page-setup">
        <MyListCarousel ownProps = { ownProps }
                   currentUser = { currentUser }
                   createListMovie = { createListMovie }
                   fetchListMovies = { fetchListMovies }
                   myMovies = { myMovies }
                   listMovies = { listMovies }
                   deleteListMovie = { deleteListMovie }/>
      </div>
    );
  }
}

export default MyList;
