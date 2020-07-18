//Create a function to convert an array of percentages to their decimal equivalents.

function convertToDecimal(perc) {
	return perc.map(percentage => parseFloat(percentage) / 100);
}