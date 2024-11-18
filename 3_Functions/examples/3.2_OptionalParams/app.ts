//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
    // Important: optional parameter cannot be declared before of NON-OPTIONAL parameter in order
    const getHeroName = (firstName: string, lastName?: string) : string => {
        return `${lastName.toUpperCase()}, ${firstName.toUpperCase()}`;
    }

    const somethingBad = undefined;
    const fullName = getHeroName("Andres", somethingBad);
    console.log({ fullName });
})()
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


//Step #2: Typed optional params with default value
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
