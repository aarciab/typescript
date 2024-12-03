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
// (() => {

//     interface IHuman {
//       displayName: string,
//       age: number,
//     }

//     interface IHero extends IHuman {
//       powers: string[];
//       canFly(): boolean,
//       vehicules?: string[];
//     }

//     const hero: IHero = {
//       displayName: "Batman",
//       age: 45,
//       powers: ["Money", "Smart"],
//       canFly: () => false,
//       vehicules: ["Batimovil"],
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


//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// //Class in TS 
//----------------------
// (() => {

//     class Vehicule {
//       private numberOfWeels: number;
//       private numberofSeats: number;
//       public name: string;

//       constructor(numberOfWeels: number, numberofSeats: number, name: string) {
//         this.numberOfWeels = numberOfWeels;
//         this.numberofSeats = numberofSeats;
//         this.name = name;
//       }
//     }

//     const skateboard = new Vehicule(4, 1, "Skateboard");
//     console.log(skateboard);

// })()
//----------------------


// //----------------------
// (() => {

//     class Vehicule {

//       constructor(
//         private numberOfWeels: number, 
//         private numberofSeats: number, 
//         public name: string
//       ) {}

//     }

//     const skateboard = new Vehicule(4, 1, "Skateboard");
//     console.log(skateboard);
//     console.log(skateboard.name);

// })()
// //----------------------


// Static variable
//----------------------
// (() => {

//     class Vehicule {
//       public static className: string = "Vehicule class";

//       constructor(
//         private numberOfWeels: number,
//         private numberofSeats: number,
//         public name: string
//       ) {}
      
//     }

//     const skateboard = new Vehicule(4, 1, "Skateboard");
//     console.log(skateboard);
//     console.log(skateboard.name);

//     const car = new Vehicule(4, 4, "Car");
//     // console.log(skateboard.className);
//     console.log('Static value: ' + Vehicule.className);

// })()
//----------------------



// Static variable & Method
//----------------------
// (() => {

//     class Vehicule {
//       public static className: string = "Vehicule class";
//       public static getClassName(): string {
//         return Vehicule.className;
//       }

//       constructor(
//         private numberOfWeels: number,
//         private numberofSeats: number,
//         public name: string
//       ) {}

//       getDescription(): string {
//         return `className: '${Vehicule.className}' - name: '${this.name}' - numberOfWeels: '${this.numberOfWeels}' - numberofSeats: '${this.numberofSeats}'`;
//       }
//     }

//     const skateboard = new Vehicule(4, 1, "Skateboard");
//     console.log(skateboard.getDescription());

//     console.log("Vehicule.getClassName(): " + Vehicule.getClassName());

// })()
//----------------------


// Inheritance
//----------------------
// (() => {

//     class Vehicule {
//       public static className: string = "Vehicule class";
//       public static getClassName(): string {
//         return Vehicule.className;
//       }

//       constructor(
//         private numberOfWeels: number,
//         private numberofSeats: number,
//         public name: string,
//         protected year: number
//       ) {}

//       getDescription(): string {
//         return `className: '${Vehicule.className}' - name: '${this.name}' - numberOfWeels: '${this.numberOfWeels}' - numberofSeats: '${this.numberofSeats}'`;
//       }

//       protected getManufactureYear() {
//         return this.year;
//       };
//     }

//     class Motorcycle extends Vehicule {
//       constructor(
//         numberofSeats: number,
//         public brand: string,
//         public year: number
//       ) {
//         super(2, numberofSeats, "Motorcycle", year);
//       }

//       getDescription(): string {
//         return super.getDescription() + ` - brand: '${this.brand}'`;
//       }

//       getYear() {
//         return super.getManufactureYear();
//       }
//     }

//     const yamaha = new Motorcycle(2, "Yamaha", 2024);
//     console.log(yamaha);
//     console.log(yamaha.getDescription());
//     // console.log(yamaha.getManufactureYear());  //Protected methods can only be visible by child classes
//     console.log(yamaha.getYear());
// })()
//----------------------



// Getters & Setters
//----------------------
// (() => {

//     class Vehicule {
//       private _numberOfWeels: number = 0;

//       public get getNumberOfWeels() {
//         return this._numberOfWeels;
//       }

//       public set setNumberOfWeels(numberOfWeels: number) {
//         this._numberOfWeels = numberOfWeels;
//       }

//     }

//     const yamaha = new Vehicule();
//     console.log(yamaha);

//     yamaha.setNumberOfWeels = 3;
//     console.log("_numberOfWeels: " + yamaha.getNumberOfWeels);
// })()
//----------------------



// Readonly
//----------------------
// (() => {

//     class Vehicule {
//       readonly _vin: string;

//       constructor(vin: string) {
//         this._vin = vin;
//       }
//     }

//     const yamaha = new Vehicule('XYZ123');
//     console.log(yamaha);

//     // yamaha._vin = 'abc321';
// })()
//----------------------



// Abstract classes
//----------------------
(() => {

    abstract class Vehicule {
      private _numberOfWeels: number;

      constructor(numberOfWeels: number) {
        this._numberOfWeels = numberOfWeels;
      }

      public get numberOfWeels() {
        return this._numberOfWeels;
      }

      public set numberOfWeels(numberOfWeels: number) {
        this._numberOfWeels = numberOfWeels;
      }
    }

    class Car extends Vehicule {
      constructor(numberOfWeels: number, public brand: string) {
        super(numberOfWeels);
      }
    }

    class Bus extends Vehicule {
      constructor(numberOfWeels: number, public brand: string) {
        super(numberOfWeels);
      }
    }

    // const toyota = new Vehicule(4);

    const honda = new Car(4, 'Honda');
    console.log(honda);

    let vehicule: Vehicule = new Bus(10, 'Scania');
    console.log(vehicule);
    
    vehicule = honda;
    console.log(honda);
})()
//----------------------