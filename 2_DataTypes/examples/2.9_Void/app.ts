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
  function aFunction(): void {
    // return 1;
    // return null;
    return;
  }

  const a = aFunction();
  console.log("a: " + a);

  const bFunction = (): void => {
    // return "b"
    // return null;
    return;
  };
  
  const b = bFunction();
  console.log("b: " + b);
})();
//----------------------
