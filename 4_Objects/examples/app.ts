// TSCONFIG =========================================================================
//----------------------
// (() => {

//   let a: string = "Variable A";
//   let b: string = "Variable B";
//   let c: string = "Variable C";
  
//   /*
//     Adding few lines of comments and spaces below
//   */

//   console.log(`Before operations a:'${a}', b:'${b}', c:'${c}'`);



//   a += " has changed";
//   b += " has changed";
//   c += " has changed";

//   console.log(`After operations a:'${a}', b:'${b}', c:'${c}'`);

//   // Reference: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

//   // Uncomment property 'sourceMap', and check the file "app.js.map" created

//   // Inspect files "app.js" and "app.ts" with developer tools, special attention to "#sourceMappingURL" property 

//   // Remove comments from output field by enabling property "removeComments"

// })()
//----------------------



// TYPES ===========================================================================
//Defining a simple object
//----------------------
// (() => {

//     let hero = {
//       displayName: 'Batman',
//       age: 45,
//       powers: ['Money', 'Smart']
//     };

//     console.log({ hero });

//     // #2: Try to modify created object signature
//     hero = {
//       origin: "Gotham City",
//       canFly: () => false,
//     };

//     console.log({ hero });

// })()
//----------------------

//Create an inline "type"
//----------------------
// (() => {

//   // let hero: {
//   //   displayName: string;
//   //   age: number;
//   //   powers: string[];
//   //   canFly?: Function;
//   // } = {
//   //   displayName: "Batman",
//   //   age: 45,
//   //   powers: ["Money", "Smart"],
//   // };

//   let hero: { displayName: string; age: number; powers: string[], canFly?: () => boolean } = {
//     displayName: "Batman",
//     age: 45,
//     powers: ["Money", "Smart"],
//   };

//   hero = {
//     displayName: "Superman",
//     age: 35,
//     powers: ["super powers"],
//     canFly: () => true,
//   };

//   console.log({ hero });

//   let hero2: {
//     displayName: string;
//     age: number;
//     powers: string[];
//     canFly?: Function;
//   } = {
//     displayName: "Flash",
//     age: 25,
//     powers: ["Speed"],
//   };

//   console.log({ hero2 });

// })()
//----------------------

//Create a reusable "type"
//----------------------
// (() => {

//   type THero = {
//     displayName: string;
//     age: number;
//     powers: string[];
//     canFly?: () => boolean;
//   };

//   let hero: THero = {
//     displayName: "Batman",
//     age: 45,
//     powers: ["Money", "Smart"],
//   };

//   hero = {
//     displayName: "Superman",
//     age: 35,
//     powers: ["super powers"],
//     canFly: () => true,
//   };

//   let hero2: THero = {
//     displayName: "Flash",
//     age: 25,
//     powers: ["Speed"],
//   };

//   console.log({ hero });
//   console.log({ hero2 });

// })();
//----------------------

// INERFACES ===========================================================================
//Defining a simple interface
//----------------------
// (() => {

//     interface IHero {
//         displayName: string,
//         age: number,
//         powers: string[],
//         canFly(): boolean,
//         vehicules?: string[],
//     }

//     const hero: IHero = {
//       displayName: 'Batman',
//       age: 45,
//       canFly: () => false,
//       powers: ['Money', 'Smart']
//     };

//     console.log({ hero });

// })()
//----------------------

//Extending an interface and inner
//objects declarations
//----------------------
// (() => {

//     interface IHuman {
//         displayName: string,
//         age: number,
//     }

//     interface IHero extends IHuman {
//       powers: string[];
//       canFly(): boolean
//       vehicules?: string[];
//     }

//     const hero: IHero = {
//       displayName: 'Batman',
//       age: 45,
//       powers: ['Money', 'Smart'],
//       canFly: () => false,
//       vehicules: ['Batimovil']
//     };

//     console.log({ hero });

//     interface IVillain extends IHuman {
//       evilLevel: number;
//       origin: {
//         dateOfBirth: string;
//         reasonForEvil: string;
//       };
//       // origin: IVillainOrigin;
//     }

//     interface IVillainOrigin {
//       dateOfBirth: string;
//       reasonForEvil: string;
//     }

//     const villain: IVillain = {
//       displayName: "Batman",
//       age: 45,
//       evilLevel: 10,
//       origin: {
//         dateOfBirth: '13/03/1985',
//         reasonForEvil: 'Unknown'
//       }
//     };

//     console.log({ villain });

// })()
//----------------------

//Type vs Interface
//----------------------
(() => {

    interface IHuman {
      displayName: string,
      age: number,
    }

    interface IHero extends IHuman {
      powers: string[];
      canFly(): boolean,
      vehicules?: string[];
    }

    const hero: IHero = {
      displayName: "Batman",
      age: 45,
      powers: ["Money", "Smart"],
      canFly: () => false,
      vehicules: ["Batimovil"],
    };

    console.log({ hero });

    //=============================

    type TMachine = {
      brand: string;
      model: string;
      serial: string;
    };

    type TRobot = {
      functions: string[];
    };

    const teslaRobot: TRobot = {
        functions: ["walk", "run", "jump"]
    }

    console.log({ teslaRobot });

})()
//----------------------

