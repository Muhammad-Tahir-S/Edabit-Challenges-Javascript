//Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.

function areaOfCountry(name, area) {
	const percentage = ((area * 100) / 148940000).toFixed(2);

    return `${name} is ${percentage}% of the total world's landmass`;
}