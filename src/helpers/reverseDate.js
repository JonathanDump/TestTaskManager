export const reverseDate = (date) => {
  const [year, month, day] = date.split("-");

  return `${day}-${month}-${year}`;
};
