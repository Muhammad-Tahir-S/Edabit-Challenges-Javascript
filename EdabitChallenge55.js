//Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

const maximumScore = (titleHand) => {
		let maxScore = 0
		for (i in titleHand){
			maxScore += titleHand[i].score;
		}
		return maxScore;
}
