var Car = /** @class */ (function () {
    function Car(Make, Model, Year) {
        this.Make = Make;
        this.Model = Model;
        this.Year = Year;
    }
    Car.prototype.start = function () {
        console.log("My dream car is ".concat(this.Make, ",").concat(this.Model, ", year ").concat(this.Year, "."));
    };
    return Car;
}());
var Mercedes = new Car("Mercedes", "Brabus Rocket", 2025);
Mercedes.start();
