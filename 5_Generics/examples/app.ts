// GENERICS =========================================================================
//----------------------
// (() => {
//   //Example 1
//   //Requirement: create utility function to merge all type of arrays
  
//   const mergeArray = (array1: any[], array2: any[]) => {
//     return [...array1, ...array2];
//   };

//   //Number
//   const numbers = mergeArray([1, 2, 3], [4, 5, 6]);
//   console.log(numbers.map(n => n.toFixed(2)));

//   //String
//   const strings = mergeArray(["a", "b", "c"], ["d", "e", "f"]);
//   console.log(strings.map(s => s.toLocaleUpperCase()));

//   //Object
//   const vehicules = mergeArray(
//     [
//       { vin: "a1", numberOfWeels: 1 },
//       { vin: "a2", numberOfWeels: 2 },
//       { vin: "a3", numberOfWeels: 3 },
//     ],
//     [
//       { vin: "b4", numberOfWeels: 4 },
//       { vin: "b5", numberOfWeels: 5 },
//       { vin: "b6", numberOfWeels: 6 },
//       { vin: 7, numberOfWeels: 6 },
//     ]
//   );

//   console.log(vehicules.map((s) => s.vin.toLocaleUpperCase()));

// })()
//----------------------



// //----------------------
// (() => {
//   //Example 1
//   //Requirement: create utility functions to merge all type of arrays
  
//   const mergeNumberArray = (array1: number[], array2: number[]) => {
//     return [...array1, ...array2];
//   }

//   const numbers = mergeNumberArray([1, 2, 3], [4, 5, 6]);
//   console.log(numbers.map(n => n.toFixed(2)));

//   const mergeStringArray = (array1: string[], array2: string[]) => {
//     return [...array1, ...array2];
//   };

//   const strings = mergeStringArray(["a", "b", "c"], ["d", "e", "f"]);
//   console.log(strings.map(s => s.toLocaleUpperCase()));

//   interface IVehicule {
//     vin: string;
//     numberOfWeels: number;
//   }

//   const mergeVehiculeArray = (array1: IVehicule[], array2: IVehicule[]) => {
//     return [...array1, ...array2];
//   };

//   const vehicules = mergeVehiculeArray(
//     [
//       { vin: "a1", numberOfWeels: 1 },
//       { vin: "a2", numberOfWeels: 2 },
//       { vin: "a3", numberOfWeels: 3 },
//     ],
//     [
//       { vin: "b4", numberOfWeels: 4 },
//       { vin: "b5", numberOfWeels: 5 },
//       { vin: "b6", numberOfWeels: 6 },
//     ]
//   );

//   console.log(vehicules.map((s) => s.vin.toLocaleUpperCase()));

// })()
// //----------------------


//----------------------
// (() => {
//   //Example 1
//   //Requirement: create utility functions to merge all type of arrays
  
//   const mergeArray = <T>(array1: T[], array2: T[]) => {
//     return [...array1, ...array2];
//   }

//   const numbers = mergeArray<number>([1, 2, 3], [4, 5, 6]);
//   console.log(numbers.map((n) => n.toFixed(2)));

//   const strings = mergeArray<string>(["a", "b", "c"], ["d", "e", "f"]);
//   console.log(strings.map((s) => s.toLocaleUpperCase()));

//   interface IVehicule {
//     vin: string;
//     numberOfWeels: number;
//   }

//   const vehicules = mergeArray<IVehicule>(
//     [
//       { vin: "a1", numberOfWeels: 1 },
//       { vin: "a2", numberOfWeels: 2 },
//       { vin: "a3", numberOfWeels: 3 },
//     ],
//     [
//       { vin: "b4", numberOfWeels: 4 },
//       { vin: "b5", numberOfWeels: 5 },
//       { vin: "b6", numberOfWeels: 6 },
//     ]
//   );

//   console.log(vehicules.map((s) => s.vin.toLocaleUpperCase()));

// })()
//----------------------


//----------------------
(() => {
  //Example 2
  //Requirement: create a generic envelop class of 2 generic class with toString option in common
  
  interface IDetails {
    details: () => string
  }

  class Car implements IDetails {
    constructor(private plate: number) {}

    public details = () => {
      return `Class 'Car' [ plate: ${this.plate} ]`;
    };
  }

  class Book implements IDetails {
    constructor(private editorial: string) {}

    public details = () => {
      return `Class 'Book' [ editorial: ${this.editorial} ]`;
    };
  }

  class Envelop<T extends IDetails, U extends IDetails> {
    private first: T;
    private second: U;

    constructor(first: T, second: U) {
      this.first = first;
      this.second = second;
    }

    public checkEntries = () => {
      return `Class 'Envelop' [ first: ${this.first.details()}, second: ${this.second.details()} ]`;
    };
  }

  class Andres {

  }

  const envelop = new Envelop(new Car(123456), new Book("O'Reilly"));

  console.log(envelop.checkEntries());

})()
//----------------------