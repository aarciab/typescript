//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
    // Important: optional parameter cannot be declared before of NON-OPTIONAL parameter in order
    const getHeroName = (
      val1: string,
      val2?: string,
      val3?: string,
      val4?: string
    ): string => {
      return `${val1}, ${val2}, ${val3}, ${val4}`;
    };

    const response = getHeroName("Val-1", "Val-2", "Val-3");
    console.log(response);
})()
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

//   const response = getHeroName("Val-1", "Val-2", "Val-3", "Val-4");
//   console.log(response);
// })();
//----------------------

