export const fetchGenres = () => {
  return $.ajax({
    url: '/api/genres'
  });
};

export const fetchGenre = id => {
  return $.ajax({
    url: `/api/genres/${id}`
  });
};
