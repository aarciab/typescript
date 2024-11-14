//Step #1: Create a anonymous function auto-callable
//----------------------
(() => {
  enum TrafficLight {
    GREEN,
    YELLOW,
    RED
  }

  const lightColor: TrafficLight = TrafficLight.RED;
  console.log(lightColor);
})()
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