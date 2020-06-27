// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

function maximumScore(tileHand) {
	var score = 0;
	for (i = 0; i < tileHand.length; i++){
		score += tileHand[i].score;
	}
	return score;
	
	
}