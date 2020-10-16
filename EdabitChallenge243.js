//Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

function rps(p1, p2) {
  let w = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock"
  }
  if (p1 === p2) return "It's a draw"
	return `The winner is ${w[p1] === p2 ? 'p1' : 'p2'}` 
}