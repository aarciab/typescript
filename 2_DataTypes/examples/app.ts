// INFER DATA TYPES ===========================================================================
//Step #1: Write code below and try to see what TS infers
//----------------------
// const a: number = 10; //TS recognizes "a" as a constant with value "10" (no number, no string, no nothing just 10)
// let b: number = 20; //TS does not infers, TS recognizes to "b" as a number with value "20"
// let c; //TS recognizes "c" as "any" since type was not assigned

// c = {};
// c = 3.14;
// c = "can hold anything without control";
//----------------------

//Step #2: Place the cursor over the variable and see what TS infers.
//----------------------
// const a:number = 10;
// let b:string = '20';
//----------------------

//Step #2: Add function and explains how TS infers function variables
//----------------------
// const a:number = 10;
// let b:string = '20';

// function sayHello(msg) { //No good control on the function, anything can be sent to this function
//     console.log(msg)
// }

// sayHello("Algo")
//----------------------

//Step #4: Generates "tsconfig.json" file and see now how infers work with property "noImplicitAny". 
//Explain about the autocompletion and IDE help



// BOOLEAN ===========================================================================
//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {

//     //JS
//     let a = true;
//     console.log({ a });

//     //Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

//     // let b:boolean;
//     let b: boolean = true;
//     console.log({ b });

// })()
//----------------------


//Step #2: Output verification
//----------------------
// (() => {
//     const isB:boolean = true;
//     let result: boolean | string = isB ? "true" : false;
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



// NUMBER ===========================================================================
//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {
//     //JS
//     let a = 1.0000000000000009; //If I add one more zero will break floating portion
//     console.log({ a });

//     a = 10;
//     console.log(`Addition: ${a + 2}`);
//     console.log(`Substraction: ${a - 2}`);
//     console.log(`Multiplication: ${a * 2}`);
//     console.log(`Division: ${a / 2}`);
//     console.log(`Modulo: ${a % 3}`);
//     console.log(`Exponential: ${a ** 2}`);

//     //Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

//     const b: number = '10';
//     const c: number = 10;
//     console.log("Equals: " + (b == c))

// })()
//----------------------


//Step #2: Detecting the error
//----------------------
// (() => {

//   let aNumber = null;

//   console.log({ aNumber });

//   const bNumber: number = 20;

//   //Eg. 1
//   if (aNumber < bNumber) {
//     console.log("A < B")
//   } else {
//     console.log("A > B");
//   }

// })()
//----------------------
//Step #4: Check file "app.js" to see the difference in JS.




// STRING ===========================================================================
//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {
//     //JS
//     let a = 'MyString with single quotes';
//     console.log(a);
//     a = "MyString with double quotes";
//     console.log(a);

//     console.log(`Length: ${a.length}`);

//     // a[0] = 'W';
//     // console.log(`Inmutability: ${a}`);

//     console.log(`UpperCase: ${a.toUpperCase()}`);
//     console.log(`LowerCase: ${a.toLowerCase()}`);

//     a = "  Some spaces  ";
//     console.log(`Trim: '${a.trim()}'`);

//     //Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//     const anyString: any = "AnyString";
//     // anyString. //Lost intellisense
//     console.log({ anyString });
//     console.log(anyString.toLowerCase());


//     const aString: string = 'My String A with special handling of "\'"';
//     const bString: string = "My String B";
//     const cString: string = `My String C and ${bString}`; //Template literals
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
//   const dString = `aAny: ${aAny} - bNumber: ${bNumber}`; //Template literals calls ".toString()" method to get string value representation
//   console.log({ dString });

// })()
//----------------------


//Step #3: Avoid undefined with null/undefined checks
//----------------------
// (() => {

//   const aString: string = "String";
//   let a: undefined|string = aString[7];
//   console.log(a.toUpperCase());

//   //Fix
//   console.log(a?.toUpperCase() || 'Undefined checked with "||"');
//   console.log(a?.toUpperCase() ?? 'Undefined checked with "??"');

// })()
//----------------------

//Step #4: Check "null" check using "?" and how TS converts simple '?' to complex code 




// ANY ===========================================================================
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
// (() => {

//   let anyValue;

//   anyValue = "Something";
//   console.log((anyValue as string).charAt(0));

// //   anyValue = 123.423556;
//   console.log((<string>anyValue).charAt(0));

// })()
//----------------------



// ARRAY ===========================================================================
//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {

//     //JS
//     let a = [];
//     a = [1, true, "AString"];
//     // a = new Array(1, 'aValue', true);
//     console.log({ a });

//     //Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//     let numberArray: number[];
//     numberArray = [1,2,3];
//     numberArray.push(4);
//     // numberArray.push('5');
//     console.log(numberArray);


//     let mixedArray: (number | string | boolean)[];
//     mixedArray = [1, 2, 3, "sd"];
//     console.log(mixedArray);

// })()
//----------------------


//----------------------
// (() => {

//   let anyArray: any[];

//   anyArray = [1, '2', 3];
//   anyArray.push(4);
//   anyArray.push(true);
//   anyArray.push({});
//   console.log(anyArray);

// })()
//----------------------


//Step #2: Cascading types
//----------------------
// (() => {
//   let numberArray: number[] = [1, 2, 3];
//   numberArray.forEach((num) => console.log(num.toFixed(2))); 
// })()
//----------------------



// TUPLE ===========================================================================
//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {

//   let tuple: [string, number, boolean] = ['A', 1, true];
//   tuple[0] = 'B';
//   tuple[1] = 2;
//   tuple[2] = false;

//   console.log(tuple);

// })()
//----------------------



// ENUM ===========================================================================
//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {

//   enum TrafficLight {
//     GREEN,
//     YELLOW,
//     RED
//   }

//   const lightColor: TrafficLight = TrafficLight.RED;
//   console.log(lightColor);

// })()
//----------------------
//Step #2: Check how TS trasnpile into JS


//Step #3: Assign specific values to enum
//----------------------
// (() => {

//   enum TrafficLight {
//     GREEN = 'G',
//     YELLOW = 'Y',
//     RED = 'R'
//   }

//   const lightColor: TrafficLight = TrafficLight.RED;
//   console.log(lightColor);

// })()
//----------------------
//Step #2: Check how TS trasnpile into JS



// VOID ===========================================================================
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
// (() => {

//   function aFunction(): void {
//     // return 1;
//     // return null;
//     return undefined;
//     // return;
//   }

//   const a = aFunction();
//   console.log("a: " + a);

//   const bFunction = (): void => {
//     // return "b"
//     // return null;
//     return;
//   };
  
//   const b = bFunction();       // TODO: Check
//   console.log("b: " + b);

// })();
//----------------------



// NEVER ===========================================================================
//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {

//     const neverFunction = (): never => {
//         throw new Error("Soemthing went wrong!");
//         // return undefined;
//     };

//     neverFunction();
//     console.log("Program continue...");

//     const otherNeverFunction = (): never => {
//         // return 1;
//         // return null;
//         // return undefined;
//         // return;
//         throw new Error("Soemthing went wrong!");
//     };

//     const b = otherNeverFunction();
//     console.log("b: " + b);

// })()
//----------------------



// NULL & UNDEFINED ===========================================================================
//Step #1: Create a anonymous function auto-callable

//----------------------
// (() => {

//     //JS
//     let a = null; //Intentional absence of value
//     console.log({ a });

//     let b = undefined; //Variable without value assigned
//     console.log({ b });

//     //Reference:
//     //Null: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null
//     //Undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

// })()
//----------------------

//----------------------
// (() => {

//   //Play with TConfig.json = 'strictNullChecks'
// //   let aValue: boolean = undefined;
// //   console.log({ aValue });

// //   let bValue: boolean = null;
// //   console.log({ bValue });

//   let cValue: boolean | undefined | null = undefined;
//   console.log({ cValue });

// })()
//----------------------


//----------------------
(() => {

  const aFunction = (): (void | null) => {
    // return null;
    // return undefined;
    return;
  }

  let aValue = aFunction();
  console.log(aValue);

})()
//----------------------
