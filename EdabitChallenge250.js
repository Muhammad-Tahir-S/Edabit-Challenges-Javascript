//Create a function that takes an array and returns the sum of all items in the array.

function sumArray(arr){
return arr.flat(Infinity).reduce((a,c)=>a+c);
}