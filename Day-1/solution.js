
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
//  1. Print the price of each product using forEach
products.forEach(item => console.log(item.price));
  
//   2.Print the product items as follows using forEach:
  
//   The price of banana is 3 euros.
//   The price of mango is 6 euros.
//   The price of potato is unknown.
//   The price of avocado is 8 euros.
//   The price of coffee is 10 euros.
//   The price of tea is unknown.
products.forEach(item => {
    let price = item.price;
    if (!price || price.toString().trim() === '') {
        price = 'unknown';
    } else {
        price += ' euros';
    }
    console.log(`The price of ${item.product} is ${price}.`);
});
//   3.Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach(item => {
    let price = parseFloat(item.price);
    if (!isNaN(price)) {
        sum += price;
    }
});
console.log(sum);

  
//  4. Create an array of prices using map and store it in a variable prices
const prices = products.map(item => parseFloat(item.price) || 0);
console.log(prices);

  
//   5.Filter products with prices
const productsWithPrices = products.filter(item => !isNaN(parseFloat(item.price)) && item.price.toString().trim() !== '');
console.log(productsWithPrices)
  
//  6. Use method chaining to get the sum of the prices(map, filter, reduce)
const totalSum = products
    .map(item => parseFloat(item.price))
    .filter(price => !isNaN(price))
    .reduce((acc, price) => acc + price, 0);
console.log(totalSum);
  
//  7. Calculate the sum of all the prices using reduce only
const total = products.reduce((acc, item) => {
    let price = parseFloat(item.price);
    if (!isNaN(price)) {
        acc += price;
    }
    return acc;
}, 0);
console.log(total);
  
//   8.Find the first product which doesn't have a price value
const firstNoPrice = products.find(item => isNaN(parseFloat(item.price)) || item.price.toString().trim() === '');
console.log(firstNoPrice);

  
//   9.Find the index of the first product which does not have price value
const firstNoPriceIndex = products.findIndex(item => isNaN(parseFloat(item.price)) || item.price.toString().trim() === '');
console.log(firstNoPriceIndex);
  
//   10.Check if some products do not have a price value
const someNoPrice = products.some(item => isNaN(parseFloat(item.price)) || item.price.toString().trim() === '');
console.log(someNoPrice);

  
//   11.Check if all the products have price value
const allHavePrice = products.every(item => !isNaN(parseFloat(item.price)) && item.price.toString().trim() !== '');
console.log(allHavePrice);
