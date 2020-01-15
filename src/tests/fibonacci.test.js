import { fibonacci } from "../algorithms/fibonacci";
//const fibonacci = require("../algorithms/fibonacci");
console.log(fibonacci);

test("returns 0 when input is 0", () => {
    const result = fibonacci(0);
    expect(fibonacci).toBeDefined();
    expect(result).toBe(0);
});
test("returns 1 when input is 1", () => {
    const result = fibonacci(1);
    expect(result).toBe(1);
});
test("returns 8 when input is 6", () => {
    const result = fibonacci(6);
    expect(result).toBe(8);
});
test("returns 55 when input is 10", () => {
    const result = fibonacci(10);
    expect(result).toBe(55);
});

