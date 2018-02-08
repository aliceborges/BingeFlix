export const createListMovie = (listMovieData) => {
  return $.ajax({
    url: '/api/list_movies',
    method: 'POST',
    data: {list_movie : listMovieData}
  });
};

export const fetchListMovie = id => {
  return $.ajax({
    url: `/api/list_movies/${id}`
  });
};

export const fetchListMovies = () => {
  return $.ajax({
    url: '/api/list_movies'
  });
};

export const deleteListMovie = (userId, movieId) => {
  return $.ajax({
    url: `/api/users/${userId}/movies/${movieId}/list_movies`,
    method: 'DELETE'
  });
};
