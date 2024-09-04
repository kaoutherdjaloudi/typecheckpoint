
// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void; // start method returning void
  }
  
  // Implement the Car class that implements Vehicle interface
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    // Constructor to initialize make, model, and year
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implement the start method to log "Car engine started"
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Corolla", 2021);
  
  // Call the start method
  myCar.start(); // This will log "Car engine started" to the console
  