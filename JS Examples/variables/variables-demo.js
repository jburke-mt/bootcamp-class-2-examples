// Different declarations
// var x = 1;
// let y = 1;
// const z = 1;

// Assignment vs Comparison
// // ==========================

// var assigned = 2;
// var compare = "2";

// console.log(compare === assigned);
// console.log(compare == assigned);

// // Scope

// //====================
// //Var

// var greeter = "hey hi";

// function newFunction() {
//     var hello = "hello";
// }

// console.log(hello); // error: hello is not defined

// // Problem with Var
// // ================================

// var greeter = "hey hi";
// var times = 2;

// if (times > 3) {
//     var greeter = "say Hello instead";
// }

// console.log(greeter); // "say Hello instead"

// // Let
// // ======================

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // say Hi

// Let fixing Var
// ==========================================
// let greeting = "say Hi";
// if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

// TYPES AND COLLECTIONS
// //==========================

// DYNAMICALLY TYPED

// // no error
// let message = 123056;
// message = "123456";

// message = message + 1234;

// console.log(message);
// now take out the value reassignment

// //=======================
// NUMBERS
// //=======================

// Converting to a number
let x = "0b011";
x = +x;
console.log(x);

let y = "0x123";
y = parseInt(y, 10);
console.log(y);

// let a = 1;
// console.log(++a); // 1
// console.log(a); // 2
// // Decrement
// let b = 1;
// console.log(--b); // 1
// console.log(b); // 0

// // Comparisons
// let x = 1;
// let y = 2;

// let y = 4;
// console.log(--y);

// console.log(x < y);

// // Example

// // Prevent negative numbers

// let input = 1;

// function notLessThan0(input) {
//     if (input >= 0) {
//         return input;
//     } else {
//         return 0;
//     }
// }

// console.log(notLessThan0(input));

// Incrementing and Random Numbers

// let x = 1;

// let y = x + 1;

// let z = 0;
// z++;
// console.log(z);

// let random = Math.random();
// console.log(random);

// function randomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }

// console.log(Math.floor(randomNumber(1, 10)));

// function roundedRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// console.log(roundedRandomNumber(1, 10));

// //=======================
// STRINGS
// //=======================

// Case sensitive (this will catch a lot of people)
// let first = "Abc";
// let second = "abc";

// console.log(first.toLowerCase() === second.toLowerCase());

// console.log(x.toLocaleLowerCase() === y.toLowerCase());

// String format aka Interpolation

// let num = 10;
// let num2 = 20;
// let num3 = 30;

// let text = `The numbers are ${num}, ${num2}, ${num3}.`;

// console.log(text);
