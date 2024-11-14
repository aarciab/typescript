//Step #1: Write code below and try to see what TS infers
//----------------------
const a = 10;   //TS recognizes "a" as a constant with value "10" (no number, no string, no nothing just 10)
//----------------------

//----------------------
let b = 20;     //TS does not infers, TS recognizes to "b" as a number with value "20"
//----------------------

//----------------------
let c;          //TS recognizes "c" as "any" since type was assigned
c = {};
c = 3.14;
c = "can hold anything without control";
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
//----------------------


//Step #4: Generates "tsconfig.json" file and see now how infers work with property "noImplicitAny". Explain about the autocompletion and IDE help