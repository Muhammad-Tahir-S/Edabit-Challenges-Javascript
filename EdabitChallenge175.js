//You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). A non-vegetarian skewer is a skewer with at least one piece of meat (-x).

function bbqSkewers(grill) {
	let non = grill.filter(x => x.includes('x')).length
	return [grill.length - non, non]
}