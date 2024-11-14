//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {
//     const anyString: any = 'AnyString';
//     // anyString.? //Lost intellisense 
//     console.log({ anyString });
//     console.log(anyString.toLowerCase());
// })()
//----------------------

//----------------------
// (() => {
//     const aString:string = 'My String A with special handlingof "\'"';
//     const bString:string = "My String B";
//     const cString:string = `My String C and ${bString}`;   //Using interpolation
//     console.log({ aString });
//     console.log({ bString });
//     console.log({ cString });
// })()
//----------------------


//Step #2: Check how TS uses the ".toString()" method from inferred object
//----------------------
// (() => {
//   const aAny = 123;
//   const bNumber: number = 456;
//   const dString = `aAny: ${aAny} - bNumber: ${bNumber}`; //Interpolation calls ".toString()" method to get string value representation
//   console.log({ dString });
// })()
//----------------------


//Step #3: Avoid undefined with null/undefined checks
//----------------------
(() => {
  const aString: string = "String";
//   console.log(aString[7].toUpperCase());

  //Fix
  console.log(aString[7]?.toUpperCase() || 'Undefined checked with "||"');
  console.log(aString[7]?.toUpperCase() ?? 'Undefined checked with "??"');
})()
//----------------------


//Step #4: Check "null" check using "?" and how TS converts simple '?' to complex code 
