export const uniqueKey = (num = 1) => {
  let date = new Date;
  return date.valueOf() * num;
};

export const randomNumFromOneToFive = () => {
  return Math.floor(Math.random() * 5);
};
