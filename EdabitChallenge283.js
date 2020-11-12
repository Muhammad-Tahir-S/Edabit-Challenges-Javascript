//According to the lodash documentation, _.difference(array, [values]) creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

const difference = (array, ...arrays) =>
	array.filter(e => ![...arrays.flat()].includes(e));