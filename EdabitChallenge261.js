//Shreeya first year computer science student is taking an intro to regex class. Her professor gives her the assignment to write a function that checks whether an input date as a string is in the format yyyy/mm/dd. She has written a regular expression but the regular expression does not seem to be correct. Help Shreeya fix the error!

function assignment(d){
var regex=/\b\d{4}\/\d{2}\/\d{2}\b/g
	return regex.test(d);
}