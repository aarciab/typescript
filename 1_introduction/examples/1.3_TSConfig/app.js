"use strict";
//Step #1: Write code below
const msg = "Hello TypeScript";
console.log(msg);
//Step #2: Ust TSC to generate TSConfig.json file
// Execute: tsc --init
//Step #3: Check content "tsconfig.json" file
//Step #4: Remove "app.js" file
//Step #5: Transpile all files at once with TSC + tsconfig.json
// Execute: tsc
//Step #6: Check content of "app.js" file, check "strict" comment added
//Step #7: Check "observable" mode
// Execute: tsc -w
//Step #8: Make some modification to "app.ts" file and check output file
//Step #9: Make some modification to "app.js", add see output, explain the issue
// with output "501"
/*
//----------------------
var mySuperHero = {
  name: "Superman",
  age: 30,
};

mySuperHero.age = "50";

console.log(mySuperHero.age + 1);
//----------------------
*/
//Step #10: Make some modification to "app.ts", add see TS about the changes
//----------------------
var mySuperHero = {
    name: "Superman",
    age: 30,
};
mySuperHero.age = 50;
console.log(mySuperHero.age + 1);
//----------------------
