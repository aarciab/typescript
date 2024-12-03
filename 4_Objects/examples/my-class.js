//Class in JS
//----------------------
(() => {

    class Vehicule {
      numberOfWeels;
      numberofSeats;

      constructor(numberOfWeels, numberofSeats) {
        this.numberOfWeels = numberOfWeels;
        this.numberofSeats = numberofSeats;
      }
    }

    class Car extends Vehicule {
      chassisType;
    }

    const skateboard = new Vehicule("4", 1);
    const car = new Car("Single Chassis");  // Default constructor chain
    console.log(skateboard);
    console.log(car);


    // No default constructor chain
    class Motorcycle extends Vehicule {
      cc;
      constructor(cc) {
        this.cc = cc;
      }
    }

    const honda = new Motorcycle(1200);
    console.log(car);

})()
//----------------------

