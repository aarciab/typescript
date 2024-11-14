"use strict";
//Step #1: Create a anonymous function auto-callable
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
