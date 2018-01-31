export const uniqueKey = (num = 1) => {
  let date = new Date;
  return date.valueOf() * num;
};
