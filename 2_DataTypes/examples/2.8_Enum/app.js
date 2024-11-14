"use strict";
//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
    let TrafficLight;
    (function (TrafficLight) {
        TrafficLight[TrafficLight["GREEN"] = 0] = "GREEN";
        TrafficLight[TrafficLight["YELLOW"] = 1] = "YELLOW";
        TrafficLight[TrafficLight["RED"] = 2] = "RED";
    })(TrafficLight || (TrafficLight = {}));
    const lightColor = TrafficLight.RED;
    console.log(lightColor);
})();
//----------------------
//Step #2: Check how TS trasnpile into JS
//Step #3: Assign specific values to enum
//----------------------
// (() => {
//   enum TrafficLight {
//     GREEN = 'G',
//     YELLOW = 'Y',
//     RED = 'R'
//   }
//   const lightColor: TrafficLight = TrafficLight.RED;
//   console.log(lightColor);
// })()
//----------------------
//Step #2: Check how TS trasnpile into JS
