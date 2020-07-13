//Create a function that returns the number of decimal places a number (given as a string) has. Any zeros after the decimal point count towards the number of decimal places.

let getDecimalPlaces = num => {
	if (num.includes('.')){
        return (num.length - num.indexOf('.') -1)
    }
	return (0)
}