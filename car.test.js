///import Car
const Car = require("./Car");

//create variable to store car instance
let car;
//reset car before each test
beforeEach(() => {
    car = new Car("ford", 1000, "petrol");
});


describe("Testing car propeties", () => {
    test("manufacturer", () => {
        const expected = "ford";
        const actual = car.manufacturer;
        expect(actual).toBe(expected);
    });
    test("price", () => {
        const expected = 1000;
        const actual = car.price;
        expect(actual).toBe(expected);
    });
    test("enginetype", () => {
        const expected = "petrol";
        const actual = car.engineType;
        expect(actual).toBe(expected);
    });
});
