// DECORATORS =========================================================================
//----------------------
// (() => {

//   //Example: General Example
//   const doSomeAngularStuff = (fn: Function) => {
//     return () => {
//       fn();
//       console.log(`Function has been called from decorator at '${new Date().toISOString()}'`);
//     }
//   }

//   const helloComponent = () => {
//     console.log("Hello component!");
//   }

//   doSomeAngularStuff(helloComponent)();

// })();
//----------------------

//----------------------
// (() => {

//   //Example: Class Decorators
//   const deprecated = (target: any) => {
//     console.warn(`Class '${target.name}' is deprecated`);
//   };

//   @deprecated
//   class MyClass {
//     constructor() {
//       console.log("Creating a new instance of MyClass");
//     }
//   }

//   const myInstance = new MyClass();
  
// })();
//----------------------

//----------------------
// (() => {

//   //Example: Methods Decorators
//   const log = (target: any, key: any, descriptor: any): void => {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       console.log(`Calling ${key} with arguments`, args);
//       const result = originalMethod.apply(this, args);
//       console.log(`Returning result of ${key}:`, result);
//       return result;
//     };
//   };
  
//   class Calculator {
//     @log
//     add(x: number, y: number): number {
//       return x + y;
//     }
//   }

//   const calculator = new Calculator();
//   const total = calculator.add(2, 3);
//   console.log(`Total:`, total);

// })();
//----------------------


//----------------------
// (() => {

//   //Example: Property Decorators
//   const readonly = (target: any, descriptor: any): void => {
//     descriptor.writable = false;
//     return descriptor;
//   };

//   class Batman {
//     @readonly
//     name = "Bruce Wayne";
//   }

//   const batman = new Batman();
//   batman.name = "Robin";

// })()
//----------------------


//----------------------
(() => {

  //Example: Parameter Decorators
  const required = (target: any, key: any, index: any) => {
    console.log(
      `Parameter at position '${index}' in '${key}' is required`
    );
  }

  class User {
    greet(@required name: any) {
      return `Hello, ${name}`;
    }
  }

  const user = new User();
  user.greet("Alice");

})();
//----------------------

