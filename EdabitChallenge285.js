//Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

function shiftToRight(x, y) {
return Math.floor(x / (Math.pow(2,y)));
}