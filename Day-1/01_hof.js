//? Higher order function-
//A higher order function is a function that takes one or more functions as arguments, or returns a function as its result

// function callbackFunction(){
//     console.log('I am  a callback function');
// }

// // higher ordeer function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     func()
// }

// higherOrderFunction(callbackFunction);


//customMade HOF->

const radius=[1,2,3];
// const calculateArea =  function (radius) {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// const calculateDiameter =  function (radius) {
//     const output = [];
//     for(let i = 0; i< radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));
// console.log(calculateDiameter(radius))


// //!Logic
const area = function(radius){
    return Math.PI * radius * radius;
}
const diameter = function(radius){
    return 2 * radius;
}
const calculate = function(radius, logic){ 
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));