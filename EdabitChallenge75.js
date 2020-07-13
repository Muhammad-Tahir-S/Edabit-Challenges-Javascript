//Given a word, write a function that returns the first index and the last index of a character.

let charIndex = (word, char) => {
    if (word.includes(char)){
        return [word.indexOf(char), word.lastIndexOf(char)]
    }
}   