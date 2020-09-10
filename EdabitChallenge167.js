//Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

function getMiddle(str) {
  if (str.length % 2 === 0) { 
    return str.charAt((str.length/2)-1) + str.charAt(str.length / 2)
  }
  return	str.charAt(str.length/2)
}