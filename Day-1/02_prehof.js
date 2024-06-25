//!map()->returns a new array

// const arr=[1,2,3,4,5];
// const output=arr.map((num)=>num+=10) // -modify without changing original array-chaining
// arr.forEach((num)=>console.log(num+10)) //return undefined
// console.log(arr);
// console.log(output);

//*Objects

// const users=[
//     {
//         userid:1,
//         firstname:"Snehal",
        
//     },
//     {
//         userid:2,
//         firstname:"Sudipta",
        
//     },
//     {
//         userid:3,
//         firstname:"Manis",
        
//     }
// ]

// users.map((user)=>console.log(user.userid + "id is for"+ user.firstname))


//!filter()-an array and returns a new array with only the values that meet certain criteria
// const arr=[1,2,3,4,5];
// const output=arr.filter((abc)=>abc%2)
// console.log(arr);
// console.log(output);

// const users=[
//     {
//         userid:1,
//         firstname:"Snehal",
//         age:40

        
//     },
//     {
//         userid:2,
//         firstname:"Sudipta",
//         age:17
//     },
//     {
//         userid:3,
//         firstname:"Manis",
//         age:22
        
//     }
// ]

// const validUsers=users.filter(({age})=>age<30)
// console.log(validUsers);

//!reduce()->called on an array returning a single output value.

// const arr = [1,2,3,4]

// // const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
//  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,10);

// console.log(sum) 


//!Task:

//!find
//!findIndex
//!some
//!every

// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]
//  1. Print the price of each product using forEach
  
//   2.Print the product items as follows using forEach:
  
//   The price of banana is 3 euros.
//   The price of mango is 6 euros.
//   The price of potato is unknown.
//   The price of avocado is 8 euros.
//   The price of coffee is 10 euros.
//   The price of tea is unknown.
//   3.Calculate the sum of all the prices using forEach
  
//  4. Create an array of prices using map and store it in a variable prices
  
//   5.Filter products with prices
  
//  6. Use method chaining to get the sum of the prices(map, filter, reduce)
  
//  7. Calculate the sum of all the prices using reduce only
  
//   8.Find the first product which doesn't have a price value
  
//   9.Find the index of the first product which does not have price value
  
//   10.Check if some products do not have a price value
  
//   11.Check if all the products have price value