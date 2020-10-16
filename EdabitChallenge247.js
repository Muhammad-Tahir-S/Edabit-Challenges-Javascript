//Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.

function isValidPhoneNumber(str) {
	return /^\(\d{3}\) \d{3}-\d{4}$/.test(str);
}