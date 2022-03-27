// Given is next Array of Objects:
const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

/* -------------------------------------------------------------------------- */
/*                                   TASK1:                                   */
/* -------------------------------------------------------------------------- */
// Implement calcTotalPrice function, so that it will return the sum of all
// products price
function calcTotalPrice(products) {
    return products.map( products => products.price).reduce( (acc, curr) => acc + curr)
}

// TEST
let totalPrice = calcTotalPrice(products)
console.log(totalPrice);

// EXPECTED OUTPUT:
// 10


/* -------------------------------------------------------------------------- */
/*                                   TASK2:                                   */
/* -------------------------------------------------------------------------- */
// Implement calcTotalPriceByCategory function, so that it will return the
// price sum of all products matching the given catgory
function calcTotalPriceByCategory(products, category) {
	return products.filter( product => product.category === 'music')
    .map( product => product.price)
    .reduce( (acc, curr) => acc + curr)
}

// TEST
let totalPriceByCategory = calcTotalPriceByCategory(products,'music')
console.log(totalPriceByCategory);

// EXPECTED OUTPUT:
// 5