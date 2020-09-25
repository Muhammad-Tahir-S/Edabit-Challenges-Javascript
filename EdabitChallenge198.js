//A fruit juice company tags their fruit juices by concatenating the first three letters of the words in a flavor's name and its capacity.
//Create a function that creates the product IDs for the variety of fruit juices.

function getDrinkID(flavor, ml) {
	return flavor
		.split(' ')
		.map(f => f.slice(0, 3))
		.join('')
		.toUpperCase() + ml.slice(0, -2)
}