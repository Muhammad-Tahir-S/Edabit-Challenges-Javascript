//Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

//Return true if the marathon is 25 miles long, otherwise, return false.

function marathonDistance(d){
	return d.reduce((acc, cur) =>acc + Math.abs(cur) ,0) == 25;
}