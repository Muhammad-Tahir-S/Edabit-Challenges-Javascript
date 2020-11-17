//Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
const compact = (arr) => arr.filter(x => !!x)