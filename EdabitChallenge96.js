//Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(str) {
return str.split('').map((c, i) => str.slice(0, i+1) );
}