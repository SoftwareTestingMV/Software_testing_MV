import isObject from '../src/isObject.js';

describe('isObject()', () => {

  // Plain objects should return true
  test('plain object → true', () => {
    expect(isObject({ name: "Cheece" })).toBe(true);
  });

  // Arrays are considered objects in JS
  test('array [1,2,3] → true', () => {
    expect(isObject([1, 2, 3])).toBe(true);
  });

  // Functions are also objects according to JS spec
  test('function → true', () => {
    expect(isObject(() => {})).toBe(true);
  });

  // Object wrapper types count as objects
  test('new Number(5) → true', () => {
    expect(isObject(new Number(5))).toBe(true);
  });

  test('new String("goat") → true', () => {
    expect(isObject(new String("goat"))).toBe(true);
  });

  // Null is explicitly NOT an object (typeof null === "object", but function corrects it)
  test('null → false', () => {
    expect(isObject(null)).toBe(false);
  });

  // Undefined is not an object
  test('undefined → false', () => {
    expect(isObject(undefined)).toBe(false);
  });

  // Primitive numbers are not objects
  test('number 789 → false', () => {
    expect(isObject(789)).toBe(false);
  });

  // Primitive strings are not objects
  test('string "CHEDDAR" → false', () => {
    expect(isObject("CHEDDAR")).toBe(false);
  });

  // Emojis are just strings → false
  test('emoji string "😊" → false', () => {
    expect(isObject("😊")).toBe(false);
  });

  // Boolean primitive is not an object
  test('boolean true → false', () => {
    expect(isObject(true)).toBe(false);
  });

  // Symbol is not an object
  test('Symbol("test") → false', () => {
    expect(isObject(Symbol("test"))).toBe(false);
  });

});
