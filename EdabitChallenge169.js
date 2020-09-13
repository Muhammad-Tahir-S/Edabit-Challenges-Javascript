//Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

const dashed = str => str.replace(/[aeiou]/gi, '-$&-');