"use strict";
//Step #1: Defining a simple object
//----------------------
// (() => {
//     const hero = {
//       displayName: 'Batman',
//       age: 45,
//       powers: ['Money', 'Smart']
//     };
//     console.log({ hero });
// })()
//----------------------
//Step #2: Try to modify created object signature
//----------------------
// (() => {
//     let hero = {
//       displayName: 'Batman',
//       age: 45,
//       powers: ['Money', 'Smart']
//     };
//     hero = {
//       origin: "Gotham City",
//       canFly: () => false,
//     };
//     console.log({ hero });
// })()
//----------------------
//Step #3: Create an inline "type"
//----------------------
// (() => {
//   let hero: { displayName: string; age: number; powers: string[], canFly?: Function } = {
//     displayName: "Batman",
//     age: 45,
//     powers: ["Money", "Smart"],
//   };
//   // let hero: { displayName: string; age: number; powers: string[], canFly?: () => boolean } = {
//   //   displayName: "Batman",
//   //   age: 45,
//   //   powers: ["Money", "Smart"],
//   // };
//   hero = {
//     displayName: "Superman",
//     age: 35,
//     powers: ['super powers'],
//     canFly: () => true
//   };
//   console.log({ hero });
// })()
//----------------------
//Step #3: Create a reusable "type"
//----------------------
(() => {
    let hero = {
        displayName: "Batman",
        age: 45,
        powers: ["Money", "Smart"],
    };
    hero = {
        displayName: "Superman",
        age: 35,
        powers: ['super powers'],
        canFly: () => true
    };
    let hero2 = {
        displayName: "Flash",
        age: 25,
        powers: ["Speed"],
    };
    console.log({ hero });
    console.log({ hero2 });
})();
//----------------------
