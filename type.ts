interface Vehicle {
  Make: string;
  Model: string;
  Year: number;
  start(): void;
}

class Car implements Vehicle {
  Make: string;
  Model: string;
  Year: number;

  constructor(Make: string, Model: string, Year: number) {
    this.Make = Make;
    this.Model = Model;
    this.Year = Year;
  }
  start(): void {
    console.log(
      `My dream car is ${this.Make},${this.Model}, year ${this.Year}.`,
    );
  }
}
const Mercedes = new Car("Mercedes", "Brabus Rocket", 2025);
Mercedes.start();
