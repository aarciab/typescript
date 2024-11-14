"use strict";
//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
    let tuple = ['A', 1, true];
    tuple[0] = 'B';
    tuple[1] = 2;
    tuple[2] = false;
    console.log(tuple);
})();
//----------------------
