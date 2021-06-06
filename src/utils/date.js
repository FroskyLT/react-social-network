export const currentTime = () => {
  const today = new Date();
  const currMonth =
    today.getMonth() < 9 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
  const currDay =
    today.getDate() < 10 ? `0${today.getMonth()}` : today.getMonth();

  return `${today.getFullYear()}-${currMonth}-${currDay}`;
};
