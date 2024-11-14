//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {
//   let anyValue;

//   // console.log(anyValue.?)  //Before assigning anything TS will not be able to infer and help with intellisense
//   anyValue = "Something";
//   console.log(anyValue.charAt(8));

//   anyValue = 123.423556;
//   console.log(anyValue.toFixed(2));
// })()
//----------------------


//Step #2: Use casting
//----------------------
(() => {
  let anyValue;

  anyValue = "Something";
  console.log((anyValue as String).charAt(8));

  anyValue = 123.423556;
  console.log((<number>anyValue).toFixed(2));
})()
//----------------------
