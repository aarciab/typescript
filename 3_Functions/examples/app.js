"use strict";
//Step #1: Create a anonymous function auto-callable
//----------------------
// (() => {
//     const hero: string = 'Flash';
//     function getHero() {
//       return hero; //This is a bad practice, variables should be declared only in the scope where they are used
//     }
//     //1) Function above does not declare returning type but TS infers that from return type unless it is ANY
//     console.log('Object type is: ' + typeof getHero);
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
// })()
//----------------------
//Step #2: Typed params
//----------------------
// (() => {
//     const getHeroName = (firstName, lastName) : string => {
//         return `${lastName}, ${firstName}`
//     }
//     const fullName = getHeroName('Andres', 'Arcia');
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
//Step #3: Typed optional params
//----------------------
// (() => {
//     # Important: optional parameter cannot be declared before of NON-OPTIONAL parameter in order
//     const getHeroName = (firstName: string, lastName?: string) : string => {
//         return `${lastName.toUpperCase()}, ${firstName.toUpperCase()}`;
//     }
//     const somethingBad = undefined;
//     const fullName = getHeroName("Andres", somethingBad);
//     console.log({ fullName });
// })()
//----------------------
//----------------------
// (() => {
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
//Step #4: Typed optional params with default value
//----------------------
(() => {
    const getHeroName = (firstName, lastName, upper = true) => {
        const result = `${lastName !== null && lastName !== void 0 ? lastName : "<NO VALUE>"}, ${firstName}`;
        return upper ? result.toUpperCase() : result;
    };
    const fullName = getHeroName("Andres", 'Arcia', false);
    console.log({ fullName });
})();
//----------------------
