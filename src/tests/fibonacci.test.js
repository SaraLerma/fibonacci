import { fibonacci } from "../algorithms/fibonacci";

test("returns 0 when input is 0", () => {
  const result = fibonacci(0);
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
