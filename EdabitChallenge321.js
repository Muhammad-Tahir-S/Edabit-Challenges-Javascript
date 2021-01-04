//Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this.

class OnesThreesNines{
	constructor(n){
		this.ones = Math.floor(n / 1);
		this.threes = Math.floor(n / 3);
		this.nines = Math.floor(n / 9);
	}
}