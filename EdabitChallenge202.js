//Create a function that takes a number as an argument and returns a string formatted to separate thousands.

function formatNum(num) {
	let ar = [...(''+num)];
  let i = ar.length;
  while (i -= 3) {
    if (i < 0) break;
    ar.splice(i, 0, ',');
  }
  return ar.join('');
}