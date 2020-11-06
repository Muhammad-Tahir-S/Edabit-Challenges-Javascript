//In cricket, an over consists of six deliveries a bowler bowls from one end. Create a function that takes the number of balls nBalls bowled by a bowler and calculates the number of overs bowled by him/her.

function totalOvers(nBalls) {
	return parseFloat(Math.floor(nBalls/6)+"."+(nBalls%6))
}