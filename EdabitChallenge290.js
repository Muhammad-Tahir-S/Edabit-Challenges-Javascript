//Check if the given string consists of only letters and spaces and if every letter is in lower case.

const lettersOnly = str => /^[a-z ]+$/.test(str);