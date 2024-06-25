//! Types of consoles in JS

//mostly developers use console.log for debugging. But you know there are many other console functions which can be used for debugging process

//?console.log()-> it helps to print strings,numbers,objects,var. It logs messages to a debugging terminal

// var test=404;
// console.log("This is console.log")
// console.log("The varible value is",test);

//?console.info()-> to print any information required for debbuging purposes instead of printing the values

// console.info("This is the information method");

//?console.debug()->it will define color codes to console method output messages. you need to tick the verbose in default values
// var userId = "UserOne";
// var userId2 = "UserTwo";
// var userId3 = "UserThree";
// console.log("Console log"+ " " +  userId)
// console.info("Console info" + " " +  userId2);
// console.debug("Console debug" + " " +  userId3);


//?console.warn()->to display warning message
// console.warn("Fix the error");

//?console.assert()->only print the message in the console if the eexpression is evaluated as false uou need to pass a boolean exp as method parameter
// let x = 1;
// let y = 2;
// // if(x+y==4){
// //     console.log("true");
// // }
// // console.assert(x + y == 4, "Expression is false")
// console.assert(x + y == 3, "Expression is True")

//?console.count()-> act as a log counter, bu default the label will be default but you can set it


// for(i=1;i<=5;i++){
//     let label="USer";
//     console.count(label);
// }

//?console.time()->to measure the execution time pf the fucntions.It is very useful to improve application perfomance.
// console.time("Time")
// var arr=[1,2,3,4,5.8,9,9,9,9,9,9,9,9]
// for (var i = 0; i < arr.length; i++) {
//  console.log("Click");
// }
// console.timeEnd("Time")

//?console.table()-<improve debugging process when it comes to array and objects

// var user={
//     name:"Shivani",
//     age:25,
//     job:"Developer"
// }
// console.log(user);
// console.table(user);
// var cities =["Lucknow","Delhi","Chandigarh","Bhubaneswar"];
// console.table(cities);

// //*Array of obj
// var users = [
//     {
//         name: "Sam",
//         age: 30
//     },
//     {
//         name: "John",
//         age: 45
//     },
//     {
//         name: "Peter",
//         age: 20
//     }
//  ];
//  console.table(users);

//?console.clear()-> to clean your browser console

