// TYPES ===========================================================================
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
//Step #1: Defining a simple object
//----------------------
// (() => {

//     interface IHero {
//         displayName: string,
//         age: number,
//         powers: string[],
//         optionalField?: string
//     }

//     const hero: IHero = {
//       displayName: 'Batman',
//       age: 45,
//       powers: ['Money', 'Smart']
//     };

//     console.log({ hero });

// })()
//----------------------



//Step #2: Extending an interface and inner 
//objects declarations
//----------------------
(() => {

    interface IHuman {
        displayName: string,
        age: number,
    }

    interface IHero extends IHuman {
        powers: string[],
        optionalField?: string
    }

    const hero: IHero = {
      displayName: 'Batman',
      age: 45,
      powers: ['Money', 'Smart']
    };

    console.log({ hero });

    interface IVillain extends IHuman {
        evilLevel: number,
        origin: {
            dateOfBirth: string,
            reasonForEvil: string,
        }
    }

    // interface IVillainOrigin {
    //   dateOfBirth: string;
    //   reasonForEvil: string;
    // }

    const villain: IVillain = {
      displayName: "Batman",
      age: 45,
      evilLevel: 10,
      origin: {
        dateOfBirth: '13/03/1985',
        reasonForEvil: 'Unknown'
      }
    };

    console.log({ villain });

})()
//----------------------



//Step #2: Type vs Interface
//----------------------
// (() => {

//     interface IHuman {
//         displayName: string,
//         age: number,
//     }

//     interface IHero extends IHuman {
//         powers: string[],
//         optionalField?: string
//     }

//     const hero: IHero = {
//       displayName: "Batman",
//       age: 45,
//       powers: ["Money", "Smart"],
//     };

//     console.log({ hero });

//     //=============================

//     type TMachine = {
//       brand: string;
//       model: string;
//       serial: string;
//     };

//     type TRobot = {
//       functions: string[];
//     };

//     const teslaRobot: TRobot = {
//         functions: ["walk", "run", "jump"]
//     }

//     console.log({ teslaRobot });

// })()
//----------------------