//Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.

function validateEmail(str) {
  if (str.indexOf('@') < 1 
     || str.indexOf('.') < 0
     || str.indexOf('@') > str.lastIndexOf('.')
     ) return false;
  return true;
}