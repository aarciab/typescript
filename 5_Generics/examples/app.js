"use strict";
(() => {
    class Car {
        constructor(plate) {
            this.plate = plate;
            this.details = () => {
                return `Class 'Car' [ plate: ${this.plate} ]`;
            };
        }
    }
    class Book {
        constructor(editorial) {
            this.editorial = editorial;
            this.details = () => {
                return `Class 'Book' [ editorial: ${this.editorial} ]`;
            };
        }
    }
    class Envelop {
        constructor(first, second) {
            this.checkEntries = () => {
                return `Class 'Envelop' [ first: ${this.first.details()}, second: ${this.second.details()} ]`;
            };
            this.first = first;
            this.second = second;
        }
    }
    class Andres {
    }
    const envelop = new Envelop(new Car(123456), new Book("O'Reilly"));
    console.log(envelop.checkEntries());
})();
