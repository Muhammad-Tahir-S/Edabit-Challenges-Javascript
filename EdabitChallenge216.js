//Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...args) {
	for(let o of args){
		if(!o){
			return false
		}
	}
	return true
}