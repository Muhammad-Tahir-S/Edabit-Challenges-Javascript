//Write a function that takes as arguments a BigInt and the desired amount of decimals and returns a string (not a number, as it will lose precision) with the correct amount of decimals.

const formatBigInt = (bigNumber, decimals) => {
	const str = String(bigNumber);
	const i = str.length - decimals;
	return str.slice(0, i) + '.' + str.slice(i);
};