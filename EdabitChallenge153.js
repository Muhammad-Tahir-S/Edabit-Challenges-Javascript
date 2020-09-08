//Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

function progressDays(runs) {
	return runs.filter((e,i,a)=>e<a[i+1]).length;
}