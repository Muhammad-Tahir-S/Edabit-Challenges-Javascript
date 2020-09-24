//Create a function that takes a string and checks if every single character is preceded and followed by a character based on the english alphabet. Example: "c" should be preceded by "b" and followed by "d" (bcd === true).

const neighboring = ([...str]) =>
    str.slice(1).every((char, index) =>
        Math.abs(+char.charCodeAt() - str[index].charCodeAt()) === 1);