export const createList = (listData) => {
  return $.ajax({
    url: '/api/lists',
    method: 'POST',
    data: listData
  });
};

export const fetchList = id => {
  return $.ajax({
    url: `/api/lists/${id}`
  });
};

export const deleteList = id => {
  return $.ajax({
    url: `/api/lists/${id}`,
    method: 'DELETE'
  });
};
