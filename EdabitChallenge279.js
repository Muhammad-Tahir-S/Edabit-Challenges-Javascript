//There has been a masterdata issue which affected the prices of the products. Check if each product has a valid price (integer or float, and greater than or equal to zero). Products with a price of 0 are free and count as a valid price.
//The return value should be a Boolean.

function hasValidPrice(product) {
	if (!product) return false
	return (product.price === +product.price && product.price >= 0)
}