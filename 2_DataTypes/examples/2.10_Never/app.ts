//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
  const neverFunction = (): never => {
    throw new Error("Soemthing went wrong!")
  };
  neverFunction();
  console.log("Program continue...")
})()
//----------------------


//----------------------
// (() => {
//   const neverFunction = (): never => {
//     // return 1;
//     // return null;
//     // return undefined;
//     // return;
//   };
//   const b = neverFunction();
//   console.log("b: " + b);
// })()
//----------------------
