test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(1+2).toBe(3);
});

test('adds 1 + 2 to equal 3 (our function)', () => {
  const { sum } = require('../scripts/sum.js');
  expect(sum(1,2)).toBe(3);
});