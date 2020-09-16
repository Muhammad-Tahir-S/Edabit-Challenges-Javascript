//Create a function that returns true if an asterisk * is inside a box.

const inBox = a => a.some(e => (/\*/).test(e));