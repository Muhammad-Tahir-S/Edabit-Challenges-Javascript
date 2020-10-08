//Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.

const expensiveOrders = (orders, cost) => Object.fromEntries(
	Object.entries(orders).filter(v => v[1] > cost));