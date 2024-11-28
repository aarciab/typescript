// BASICS ===========================================================================
//Create a anonymous function auto-callable
//----------------------
// (() => {

//     const hero: string = 'Flash';

//     function getHero() {
//       return hero; //This is a bad practice, variables should be declared only in the scope where they are used
//     }

//     //1) Function above does not declare returning type but TS infers that from return type unless it is ANY

//     console.log('Object type is: ' + typeof getHero);
//     console.log("Return value: " + getHero());

// })()
//----------------------

//----------------------
// (() => {

//     const hero: string = 'Flash';

//     const getHero = (): string => {
//       return hero; //This is a bad practice, variables should be declared only in the scope where they are used
//     }

//     //1) Function above does not declare returning type but TS infers that from return type unless it is ANY

//     console.log('Object type is: ' + typeof getHero);
//     console.log("Return value: " + getHero());

// })()
//----------------------


//Typed params
//----------------------
// (() => {

//     const getHeroName = (firstName, lastName) : string => {
//         return `${lastName.toUpperCase()}, ${firstName.toUpperCase()}`;
//     }

//     const fullName = getHeroName(new Date(), 'Arcia');
//     console.log({ fullName });

// })()
//----------------------

//----------------------
// (() => {

//     const getHeroName = (firstName: string, lastName: string) : string => {
//         return `${lastName.toUpperCase()}, ${firstName.toUpperCase()}`;
//     }

//     // const somethingBad = undefined;
//     const somethingBad: any = undefined;
//     const fullName = getHeroName(somethingBad, "Arcia");
//     console.log({ fullName });

// })()
//----------------------



// OPTIONAL PARAMS ===========================================================================
//Create a anonymous function auto-callable
//----------------------
// (() => {

//     // Important: optional parameter cannot be declared before of NON-OPTIONAL parameter in order
//     const getHeroName = (firstName: string, lastName?: string) : string => {
//         return `${lastName?.toUpperCase()}, ${firstName.toUpperCase()}`;
//     }

//     const somethingBad = undefined;
//     const fullName = getHeroName("Andres", somethingBad);
//     console.log({ fullName });
    
// })()
//----------------------

//----------------------
// (() => {

//     const getHeroName = (firstName: string, lastName?: string) : string => {
//         return `${lastName?.toUpperCase() ?? '<NO VALUE>'}, ${firstName.toUpperCase()}`;
//     }

//     const somethingBad = undefined;
//     const fullName = getHeroName("Andres", somethingBad);
//     console.log({ fullName });

// })()
//----------------------


//Typed optional params with default value
//----------------------
// (() => {

//     const getHeroName = (firstName: string, lastName?: string, upper: boolean = true) : string => {
//         const result = `${lastName ?? "<NO VALUE>"}, ${firstName}`;
//         return upper ? result.toUpperCase() : result;
//     }

//     const fullName = getHeroName("Andres", 'Arcia', false);
//     console.log({ fullName });

// })()
//----------------------



// REST PARAMS ===========================================================================
//----------------------
// (() => {

//     // Important: optional parameter cannot be declared before of NON-OPTIONAL parameter in order
//     const getHeroName = (
//       val1: string,
//       val2?: string,
//       val3?: string,
//       val4?: string
//     ): string => {
//       return `${val1}, ${val2}, ${val3}, ${val4}`;
//     };

//     const response = getHeroName("Val-1", "Val-2", "Val-3");
//     console.log(response);

// })()
//----------------------

//----------------------
// (() => {

//   // Important: optional parameter cannot be declared before of NON-OPTIONAL parameter in order
//   const getHeroName = (
//     val1: string,
//     ...restArgs: string[]
//   ): string => {
//     return `${val1}, ${restArgs.join(", ")}`;
//   };

//   console.log(getHeroName("Val-1"));
//   console.log(getHeroName("Val-1", "RVal-2", "RVal-3", "RVal-4", "RVal-5"));

// })();
//----------------------



// FUNCTION TYPE ===========================================================================
//----------------------
// (() => {
    
//   const add = (a: number, b: number) => a + b;
//   const greet = (name: string) => `Hello ${name}!`;
//   const helloWorld = () => `Hello world!`;

//   let aFunction;

//   aFunction = 10;

//   aFunction = add;
//   console.log(aFunction); //Logs the function signature
//   console.log(`Function result: ${aFunction(10, 5)}`);

//   aFunction = greet;
//   console.log(aFunction); 
//   console.log(`Function result: ${aFunction("Andres")}`);

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

//   let aFunction: Function;

//   // aFunction = 10;

//   aFunction = add;
//   console.log(aFunction); //Logs the function signature
//   console.log(`Function result: ${aFunction(10, 5)}`);

//   aFunction = greet;
//   console.log(aFunction);
//   console.log(`Function result: ${aFunction("Andres")}`);

//   aFunction = helloWorld;
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
//   console.log(`Function result: ${aFunction(10, 5)}`);

//   aFunction = greet;
//   console.log(aFunction); 
//   console.log(`Function result: ${aFunction("Andres")}`);

//   aFunction = helloWorld
//   console.log(aFunction);
//   console.log(aFunction());

// })()
// //----------------------


//----------------------
(() => {
    
  const add = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hello ${name}!`;
  const helloWorld = () => `Hello world!`;

  let aFunction: (x: string) => string;

  // aFunction = 10;

  // aFunction = add;
  // console.log(aFunction); //Logs the function signature
  // console.log(`Function result: ${aFunction(10, 5)}`);

  aFunction = greet;
  console.log(aFunction); 
  console.log(`Function result: ${aFunction("Andres")}`);

  aFunction = helloWorld  //Needs to be checked deeply
  console.log(aFunction);
  console.log(aFunction("Algo"));

})()
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
//   console.log(`Function result: ${aFunction(10, 5)}`);

//   aFunction = greet;
//   console.log(aFunction); 
//   console.log(`Function result: ${aFunction("Andres")}`);

//   aFunction = helloWorld
//   console.log(aFunction);
//   console.log(aFunction());

// })()
//----------------------

