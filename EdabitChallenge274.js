//Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

const mysteryFunc = n =>  [...(''+n)].reduce((t,c) => t*c);