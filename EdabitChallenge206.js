//Given an array of women and an array of men, either:
//Return "sizes don't match" if the two arrays have different sizes.
//If the sizes match, return a array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

const zipIt = (women, men) => {
	if (women.length === men.length) {
		return women.map((woman, i) => [woman, men[i]]);
	}
	return `sizes don't match`;
};