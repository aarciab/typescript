"use strict";
//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {
//   function aFunction() {}
//   const a = aFunction();
//   console.log("a: " + a); //Undefined
//   const bFunction = () => {};
//   const b = bFunction();
//   console.log("b: " + b); //Undefined
// })()
//----------------------
//----------------------
(() => {
    function aFunction() {
        // return 1;
        // return null;
        return;
    }
    const a = aFunction();
    console.log("a: " + a);
    const bFunction = () => {
        // return "b"
        // return null;
        return;
    };
    const b = bFunction();
    console.log("b: " + b);
})();
//----------------------
