//import car and dealership
const Car = require("./Car");
const Dealership = require("./Dealership");

//create variables to store instances
let car;
let dealership;

//reset car and dealershp before each test
beforeEach(() => {
    dealership = new Dealership("harrys", 4);
    car1 = new Car("ford", 1000, "petrol");
    car2 = new Car("ford", 1000, "diesel");
    car3 = new Car("bmw", 1000, "petrol");
    car4 = new Car("honda", 1000, "diesel");

    dealership.addCarToStock(car1);
    dealership.addCarToStock(car2);
    dealership.addCarToStock(car3);

});

describe("Testing dealership methods", () =>{
    test("add car", () => {
        dealership.addCarToStock(car4);

        const expected = 4
        const actual = dealership.countStock();
        expect(actual).toBe(expected);
    });
    test("can count stock", () => {
        dealership.countStock();

        const expected = 3
        const actual = dealership.countStock();
        expect(actual).toBe(expected);
    });
    test("acan dd car", () => {
        dealership.addCarToStock(car4);

        const expected = 4
        const actual = dealership.countStock();
        expect(actual).toBe(expected);
    });
    test("can get total value", () => {
        const expected = 3000
        const actual = dealership.totalCarsValue();
        expect(actual).toBe(expected);
    });
});