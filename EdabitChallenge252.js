//Determine whether the entered date is a magic date.

const Magic = str => {
  const [day, month, year] = str.split(' ').map(Number);

  return String(year).endsWith(day * month);
};