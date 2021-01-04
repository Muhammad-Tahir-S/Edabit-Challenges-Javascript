//Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

let shiftToRight = (x,y) => {
	if (y < 1) {return Math.floor(x)};
  x = x / 2;
  y--;
  return shiftToRight(x, y)
}