//In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
//Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.

const possibleBonus = (a, b) => {
	const diff = a - b;
	return diff < 0 && diff >= -6;
};