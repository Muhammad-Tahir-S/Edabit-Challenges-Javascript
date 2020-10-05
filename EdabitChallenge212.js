//Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

function measureDepth(arr) {
  	return arr.length === 0 ? 1 : measureDepth(arr[0]) + 1;
}