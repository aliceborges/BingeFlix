export const createList = (userId) => {
  return $.ajax({
    url: '/api/lists',
    method: 'POST',
    data: userId
  });
};

export const fetchList = userId => {
  return $.ajax({
    url: `/api/lists/${userId}`
  });
};
