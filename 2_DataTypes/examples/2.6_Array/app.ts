//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {
//   let numberArray: number[];
//   numberArray = [1,2,3];
//   numberArray.push(4);
//   // numberArray.push('5');
//   console.log(numberArray);
// })()
//----------------------

//----------------------
// (() => {
//   const anyArray = [1, '2', 3];
//   anyArray.push(4);
//   // anyArray.push(true);
//   console.log(anyArray);

//   const otherArray: (string | number | boolean)[] = [4, '5', 6];
//   otherArray.push(7);
//   otherArray.push(true);
//   console.log(otherArray);
// })()
//----------------------

//----------------------
// (() => {
//   let anyArray: any[];

//   anyArray = [1, '2', 3];
//   anyArray.push(4);
//   anyArray.push(true);
//   console.log(anyArray);
// })()
//----------------------


//Step #2: Cascading types
//----------------------
(() => {
  let numberArray: number[] = [1, 2, 3];
  numberArray.forEach((num) => console.log(num.toFixed(2))); 
})()
//----------------------
