//The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.

const reverse = txt =>
  [...txt]
    .reverse()
    .map((v) => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()))
    .join("");