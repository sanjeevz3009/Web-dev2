import * as maths from '../src/maths.js';
import * as maths2 from '../src/maths2.js';

// test('adds 1 + 2 to equal to 3', () => {
//   expect(add(1, 2)).toBe(3);
// });

// test('adds 2 + 2 to equal to 4', () => {
//   expect(add(2, 2)).toBe(4);
// });

describe.each([
  [maths, 'maths'],
  [maths2, 'maths2'],
])('maths functions', (mathsLib, name) => {
  describe(`module ${name}`, () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(mathsLib.add(1, 2)).toBe(3);
    });

    test('adds 2 + 3 to equal 5', () => {
      expect(mathsLib.add(2, 3)).toBe(5);
    });

    test('sub 2 - 3 equal -1', () => {
      expect(mathsLib.sub(2, 3)).toBe(-1);
    });
  });
});
