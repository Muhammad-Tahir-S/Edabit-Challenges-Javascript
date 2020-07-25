//Create a function which returns the number of true values there are in an array.

function count_true(lst){
	var count = 0;
	for(var i = 0; i < lst.length; i++){
		if(lst[i] === true){
			count++;
		}
	}
	return count;
}