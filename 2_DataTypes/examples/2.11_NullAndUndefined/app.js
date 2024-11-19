"use strict";
//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
    //JS
    let a = null; //Intentional absence of value
    console.log({ a });
    let b = undefined; //Variable without value assigned
    console.log({ b });
    //Reference:
    //Null: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
    //Undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
})();
//----------------------
//----------------------
// (() => {
//   //Play with TConfig.json = 'strictNullChecks'
//   // let aValue: boolean = undefined;
//   // console.log(aValue);
//   // let bValue: boolean = null;
//   // console.log(bValue);
//   let cValue: boolean | undefined = undefined;
//   console.log(cValue);
// })()
//----------------------
//----------------------
// (() => {
//   const aFunction = (): (void | null) => {
//     // return null;
//     return undefined;
//   }
//   let aValue = aFunction();
//   console.log(aValue);
// })()
//----------------------
