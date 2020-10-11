//Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

function transformUpvotes(str) {
	return str.split(' ')
		.map(a => (a.endsWith("k") ? parseFloat(a) * 1000 : parseInt(a)));
}