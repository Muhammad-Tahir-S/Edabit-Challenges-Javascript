// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society.

function societyName(friends) {
	var nameArr = friends.map(x => x.split(''));
	var letterArr= "";
	for (i=0; i<nameArr.length; i++){
		letterArr += nameArr[i][0]
	}
	return letterArr	
}
