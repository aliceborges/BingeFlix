export const createList = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/list`,
    method: 'POST',
    data: {list: {user_id: userId}}
  });
};

export const fetchList = userId => {
  return $.ajax({
    url: `/api/users/${userId}/list`
  });
};
