
// tests/index.test.js

const { sumar } = require('../src/index.js');

test('sumar(2, 3) debe devolver 5', () => {
  expect(sumar(2, 3)).toBe(5);
});
