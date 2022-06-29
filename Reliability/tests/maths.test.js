import { add } from '../src/maths.js';

test('adds 1 + 2 to equal to 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal to 4', () => {
  expect(add(2, 2)).toBe(4);
});
