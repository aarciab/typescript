"use strict";
//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
    //JS
    let a = true;
    console.log({ a });
    //Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
})();
//----------------------
//----------------------
// (() => {
//     let isA:boolean;
//     console.log("Constant is: " + isA)
// })()
//----------------------
//----------------------
// (() => {
//     let isA:boolean = true;
//     console.log("Constant is: " + isA)
// })()
//----------------------
//Step #2: Output verification
//----------------------
// (() => {
//     const isB:boolean = true;
//     let result: boolean = isB ? "true" : false;
//     console.log("Result: " + result);
// })()
//----------------------
//Step #3: Play with boolean type.
//----------------------
// (() => {
//     // let unknown: boolean;
//     // let unknown: boolean = undefined;
//     // let unknown: boolean = null;
//     let unknown: boolean = false;
//     console.log("Is DC: " + unknown);
// })()
//----------------------
