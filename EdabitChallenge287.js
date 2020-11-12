//For an array of ranges, find the maximum range that is contained in all the ranges. If there is no such range, return "No overlapping".

function overlapping(arr) {
  const min = Math.max(...arr.map(x => x[0]));
  const max = Math.min(...arr.map(x => x[1]));
  return min > max ? "No overlapping" : [min, max];
}