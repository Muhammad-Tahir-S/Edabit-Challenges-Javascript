//Given an array of the arrows contained on a player's cards, return a singular string of arrowheads that are equivalent to all of the arrowheads.

function calculateArrowhead(arr){
	let left = "";
	let right = "";
	for (let sign of arr) {
		if (sign.includes("<")) {
			left += sign;
		} else if (sign.includes(">")) {
			right += sign;
		}
	}
	return left.length > right.length
			? left.slice(right.length)
			: right.slice(left.length);
}