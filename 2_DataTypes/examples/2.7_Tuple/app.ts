//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
  let tuple: [string, number, boolean] = ['A', 1, true];
  tuple[0] = 'B';
  tuple[1] = 2;
  tuple[2] = false;

  console.log(tuple);
})()
//----------------------
