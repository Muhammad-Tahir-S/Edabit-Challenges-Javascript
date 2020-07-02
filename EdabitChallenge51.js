// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.
function amplify(num) {
	var arr = [];
	for (i = 1; i <= num; i++){
		arr.push(i);
		}
	for (i = 0; i <arr.length; i++){
		if(arr[i]%4=0){
			arr[i]*10
		}
		return arr
	}
	return arr
}