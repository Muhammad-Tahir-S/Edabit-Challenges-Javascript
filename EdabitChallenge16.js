//Create a function that returns true if the first array can be nested inside the second.
//arr1 can be nested inside arr2 if:
//arr1's min is greater than arr2's min.
//arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
	arr1.sort(function(a,b){return(a - b)});
	arr2.sort(function(a,b){return(a - b)});
	var arr1MinMax = [arr1[0], arr1[arr1.length -1]];
	var arr2MinMax = [arr2[0], arr2[arr2.length -1]];
	if (arr1MinMax[0] > arr2MinMax[0] && arr1MinMax[1] < arr2MinMax[1]){
		return true
	}
	else{
		return false
	}	
}