"use strict";
//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
    const add = (a, b) => a + b;
    const greet = (name) => `Hello ${name}!`;
    const helloWorld = () => `Hello world!`;
    let aFunction;
    aFunction = 10;
    aFunction = add;
    console.log(aFunction); //Logs the function signature
    console.log(aFunction(10, 5));
    aFunction = greet;
    console.log(aFunction);
    console.log(aFunction('Andres'));
    aFunction = helloWorld;
    console.log(aFunction);
    console.log(aFunction());
})();
//----------------------
//----------------------
// (() => {
//   const add = (a: number, b: number) => a + b;
//   const greet = (name: string) => `Hello ${name}!`;
//   const helloWorld = () => `Hello world!`;
//   let aFunction: Function;
//   aFunction = 10;
//   aFunction = add;
//   console.log(aFunction); //Logs the function signature
//   console.log(aFunction(10, 5));
//   aFunction = greet;
//   console.log(aFunction); 
//   console.log(aFunction('Andres'));
//   aFunction = helloWorld
//   console.log(aFunction);
//   console.log(aFunction());
// })()
//----------------------
// //----------------------
// (() => {
//   const add = (a: number, b: number) => a + b;
//   const greet = (name: string) => `Hello ${name}!`;
//   const helloWorld = () => `Hello world!`;
//   let aFunction: (x: number, y: number) => number;
//   aFunction = 10;
//   aFunction = add;
//   console.log(aFunction); //Logs the function signature
//   console.log(aFunction(10, 5));
//   aFunction = greet;
//   console.log(aFunction); 
//   console.log(aFunction('Andres'));
//   aFunction = helloWorld
//   console.log(aFunction);
//   console.log(aFunction());
// })()
// //----------------------
//----------------------
// (() => {
//   const add = (a: number, b: number) => a + b;
//   const greet = (name: string) => `Hello ${name}!`;
//   const helloWorld = () => `Hello world!`;
//   let aFunction: (x: string) => string;
//   aFunction = 10;
//   aFunction = add;
//   console.log(aFunction); //Logs the function signature
//   console.log(aFunction(10, 5));
//   aFunction = greet;
//   console.log(aFunction); 
//   console.log(aFunction('Andres'));
//   aFunction = helloWorld
//   console.log(aFunction);
//   console.log(aFunction());
// })()
//----------------------
//----------------------
// (() => {
//   const add = (a: number, b: number) => a + b;
//   const greet = (name: string) => `Hello ${name}!`;
//   const helloWorld = () => `Hello world!`;
//   let aFunction: () => string;
//   aFunction = 10;
//   aFunction = add;
//   console.log(aFunction); //Logs the function signature
//   console.log(aFunction(10, 5));
//   aFunction = greet;
//   console.log(aFunction); 
//   console.log(aFunction('Andres'));
//   aFunction = helloWorld
//   console.log(aFunction);
//   console.log(aFunction());
// })()
//----------------------
