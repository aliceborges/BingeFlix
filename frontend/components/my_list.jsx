import React from 'react';
import MyListCarousel from './my_list_carousel';
import LoadingIcon from './loading_icon';


class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "yup"
    };
  }
  componentWillMount() {
    this.props.fetchListMovies();
    this.props.fetchList(this.props.currentUser.id);
  }

  componentDidMount() {
    this.setState({hello: "not yet"});
  }

  render() {
    const { listMovies, moviesLoading, currentUser, createListMovie,
            fetchListMovies, deleteListMovie, ownProps, fetchList } = this.props;
            console.warn(listMovies);

    if(moviesLoading) {
      return <LoadingIcon />;
    }

    if(!listMovies) {
      return null;
    }

    return(
      <div className="my-list-component genre-page-setup">
        <MyListCarousel ownProps = { ownProps }
                   currentUser = { currentUser }
                   createListMovie = { createListMovie }
                   fetchListMovies = { fetchListMovies }
                   fetchList = { fetchList }
                   listMovies = { listMovies }
                   deleteListMovie = { deleteListMovie }/>
      </div>
    );
  }
}

export default MyList;
