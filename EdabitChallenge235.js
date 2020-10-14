//Create a function that takes in a year and returns the correct century.

function century(year) {
	const century = Math.ceil(year / 100);
  return century !== 21 
		? `${century}th century` 
		: `${century}st century`;
}