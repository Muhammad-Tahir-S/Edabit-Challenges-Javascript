//Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

function maskify(str) {
    return str.length > 4 ? '#'.repeat(str.length - 4) + str.substr(str.length - 4) : str;
}