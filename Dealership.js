//constructor
const Dealership = function(name, maxCars){
    this.name = name;
    this.maxCars = maxCars;
    this.cars = [];
};

Dealership.prototype.addCarToStock = function(car){
    this.cars.push(car);
}

Dealership.prototype.countStock = function(){
    return this.cars.length;
}
// Dealership.prototype.getManufacturers = function(){
//     manufacturers = [];
//     this.cars.forEach(manufacturers.push(this.car.manufacturer));
//     return manufacturers
// }

Dealership.prototype.totalCarsValue = function(){
    value = 0;
    this.cars.forEach(value += car.price);
}
// Dealership.prototype.findCarsByManufacturer = function(manufacturer){
//     return this.cars.filter
// }

module.exports = Dealership;