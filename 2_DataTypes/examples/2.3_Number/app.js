"use strict";
//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
    //JS
    let a = 1.0000000000000009; //If I add one more zero will break floating portion
    console.log({ a });
    a = 10;
    console.log(`Addition: ${a + 2}`);
    console.log(`Substraction: ${a - 2}`);
    console.log(`Multiplication: ${a * 2}`);
    console.log(`Division: ${a / 2}`);
    console.log(`Modulo: ${a % 3}`);
    console.log(`Exponential: ${a ** 2}`);
})();
//----------------------
//----------------------
// (() => {
//     const a: number = '10';
//     const b: number = 10;
//     console.log("Equals: " + (a === b))
// })()
//----------------------
//Step #2: Detecting the error
//----------------------
// (() => {
//   let aNumber = null;
//   console.log({ aNumber });
//   const bNumber: number = 20;
//   //Eg. 1
//   if (aNumber < bNumber) {
//     console.log("A < B")
//   } else {
//     console.log("A > B");
//   }
// })()
//----------------------
//----------------------
// (() => {
//   let aNumber: number = 10;
//   console.log({ aNumber });
//   const bNumber: number = 20;
//   //Eg. 1
//   if (aNumber < bNumber) {
//     console.log("A < B")
//   } else {
//     console.log("A > B");
//   }
// })()
//----------------------
//Step #4: Check file "app.js" to see the difference in JS.
