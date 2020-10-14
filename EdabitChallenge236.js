//Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

function reverseImage(image) {
	return image.map(v => v.map(x => +!x));
}