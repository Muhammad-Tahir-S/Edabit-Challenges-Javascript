//Find the Difference in Arrays Using a Comparison Function

const differenceWith = (a,b,f) => {
	return a.filter(e=>!b.some(x=>f(e,x)))
}