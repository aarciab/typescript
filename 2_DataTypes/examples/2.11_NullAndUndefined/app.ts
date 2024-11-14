//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
  //Play with TConfig.json = 'strictNullChecks'
  // let aValue: boolean = undefined;
  // console.log(aValue);

  // let bValue: boolean = null;
  // console.log(bValue);

  let cValue: boolean | undefined = undefined;
  console.log(cValue);
})()
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
