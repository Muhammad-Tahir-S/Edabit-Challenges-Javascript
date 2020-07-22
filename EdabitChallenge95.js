//Write a function that removes all capitals letters from a sentence except the first letter, put quotation marks around the sentence and add ", whispered Edabit." to the end.

function shhh(sentence) {
	let lowered = `"${sentence.toLowerCase()}", whispered Edabit.`;
	return lowered[0] + lowered[1].toUpperCase() + lowered.slice(2);
}