//Write a function to read the billable days of an employee and return the bonus he/she has obtained in that quarter.

function calculateBonus(days) {
  return 325 * Math.max(days - 32, 0) + 225 * Math.max(days - 40, 0) + 50 * Math.max(days - 48, 0);
}