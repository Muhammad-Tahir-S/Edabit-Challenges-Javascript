//Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

const peelLayerOff = r => r.slice(1,-1).map(c => c.slice(1,-1))