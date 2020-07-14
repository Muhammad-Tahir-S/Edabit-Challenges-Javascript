//You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

//If you can't find Nemo, return "I can't find Nemo :(".

const findNemo = sentence => {
	const index = sentence.split(' ').findIndex(e => e === 'Nemo')
  return index >= 0 ? `I found Nemo at ${index+1}!` : "I can't find Nemo :("
}