import React from "react";
import GenrePageCarousel from "./genre_page_carousel";
import LoadingIcon from "./loading_icon";

class GenrePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      fetchMovies,
      fetchGenres,
      allMovies,
      allGenres,
      moviesLoading,
      currentUser,
      ownProps
    } = this.props;

    if (moviesLoading) {
      return <LoadingIcon />;
    }

    if (!allMovies) {
      return null;
    }

    return (
      <div className="my-list-component genre-page-setup">
        {allGenres.map((genre, idx) => (
          <GenrePageCarousel
            ownProps={ownProps}
            currentUser={currentUser}
            allMovies={allMovies}
            allGenres={allGenres}
            fetchMovies={fetchMovies}
            fetchGenres={fetchGenres}
            allGenres={allGenres}
            key={idx}
          />
        ))}
      </div>
    );
  }
}

export default GenrePage;
