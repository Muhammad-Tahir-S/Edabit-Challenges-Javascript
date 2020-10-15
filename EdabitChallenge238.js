//An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
function isIsogram(str) {
  return str.length === (new Set(str.toLowerCase())).size;
}