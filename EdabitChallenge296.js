//Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.

function inclusiveArray(start, end) {
  let res = [];
  if (start > end) res.push(start);
   else for (let i = start; i <= end; i++) res.push(i);  
  return res;
}