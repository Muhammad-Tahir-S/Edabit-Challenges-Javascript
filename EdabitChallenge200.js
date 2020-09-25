//Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

function identicalFilter(arr){
    return arr.filter((str) => new Set(str).size === 1)
}