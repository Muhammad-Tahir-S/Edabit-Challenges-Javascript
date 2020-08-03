//Create the function that takes an array with objects and returns the sum of people's budgets.

const getBudgets = arr => arr.reduce((a,b) => a + b.budget, 0);