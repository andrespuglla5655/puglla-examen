const { sumar } = require("../src/index");

test("sumar(2,3) = 5", () => {
  expect(sumar(2, 3)).toBe(5);
});
