//Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.

function perimeter(l,num){
	return (4*(l=='s')+6.28*(l=='c'))*num
}