"use strict";
// Implement the Car class that implements Vehicle interface
class Car {
    // Constructor to initialize make, model, and year
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implement the start method to log "Car engine started"
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2021);
// Call the start method
myCar.start(); // This will log "Car engine started" to the console
