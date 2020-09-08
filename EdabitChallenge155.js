//Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

function XO(str) {
  return str.replace(/[^x]/ig, '').length === str.replace(/[^o]/ig, '').length
}