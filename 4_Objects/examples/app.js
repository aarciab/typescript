"use strict";
(() => {
    class Vehicule {
        constructor(numberOfWeels) {
            this._numberOfWeels = numberOfWeels;
        }
        get numberOfWeels() {
            return this._numberOfWeels;
        }
        set numberOfWeels(numberOfWeels) {
            this._numberOfWeels = numberOfWeels;
        }
    }
    class Car extends Vehicule {
        constructor(numberOfWeels, brand) {
            super(numberOfWeels);
            this.brand = brand;
        }
    }
    class Bus extends Vehicule {
        constructor(numberOfWeels, brand) {
            super(numberOfWeels);
            this.brand = brand;
        }
    }
    const honda = new Car(4, 'Honda');
    console.log(honda);
    let vehicule = new Bus(10, 'Scania');
    console.log(vehicule);
    vehicule = honda;
    console.log(honda);
})();
//# sourceMappingURL=app.js.map