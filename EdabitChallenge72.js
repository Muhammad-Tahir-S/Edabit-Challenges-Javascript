//Steve and Maurice have racing snails. They each have 3, a slow (s), medium (m) and fast (f) one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is:
//Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
//Round 2: [m, s] Use his middle snail against Steve's slowest.
//Round 3: [f, m] Use his fastest snail against Steve's middle.
//Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.

//The function inputs:

//Array 1: [s, m, f] for Maurice.
//Array 2: [s, m, f] for Steve.

function mauriceWins(mSnails, sSnails) {
	let acc = 0;
	if (mSnails[0] > sSnails[2]){
		acc++
	}
	if (mSnails[1] > sSnails[0]){
		acc++
	}
	if (mSnails[2] > sSnails[1]){
		acc++
	}
		if(acc >= 2){
		return true
	}
	else{
	return false}
}