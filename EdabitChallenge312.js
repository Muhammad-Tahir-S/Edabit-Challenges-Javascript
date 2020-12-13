//A man has n number of apples. If he eats a percentage p of the apples (if apples are available), his children will share the remainder of the apples. Create a function to determine the number of whole apples his children got. If his children did not get any apples, return "The children didn't get any apples".

const getNumberOfApples = (n, p) => {
	p = parseInt(p)*.01
	return Math.floor(n - p * n) < 1 ?
		`The children didn't get any apples` : Math.floor(n - p * n)
}