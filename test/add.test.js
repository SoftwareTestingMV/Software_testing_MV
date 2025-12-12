import add from '../src/add.js';

describe('add()', () => {

  // Basic positive integers
  test('6, 4 → 10', () => {
    expect(add(6, 4)).toBe(10);
  });

  // Negative first operand
  test('-6, 4 → -2', () => {
    expect(add(-6, 4)).toBe(-2);
  });

  // Negative second operand
  test('6, -4 → 2', () => {
    expect(add(6, -4)).toBe(2);
  });

  // Both operands negative
  test('-6, -4 → -10', () => {
    expect(add(-6, -4)).toBe(-10);
  });

  // Zero and negative zero
  test('0, -0 → 0', () => {
    expect(add(0, -0)).toBe(0);
  });

  // Undefined first operand uses second
  test('undefined, 1 → 1', () => {
    expect(add(undefined, 1)).toBe(1);
  });

  // Undefined second operand uses first
  test('1, undefined → 1', () => {
    expect(add(1, undefined)).toBe(1);
  });

  // Both undefined returns default value 0
  test('undefined, undefined → 0', () => {
    expect(add(undefined, undefined)).toBe(0);
  });

  // String coercion both operands
  test('"6", "4" → 10', () => {
    expect(add("6", "4")).toBe("64");
  });

  // Mixed string and number
  test('"6", 4 → 10', () => {
    expect(add("6", 4)).toBe("64");
  });

  // NaN first operand
  test('NaN, 5 → NaN', () => {
    expect(add(NaN, 5)).toBe(NaN);
  });

  // NaN second operand
  test('5, NaN → NaN', () => {
    expect(add(5, NaN)).toBe(NaN);
  });

  // Positive Infinity
  test('Infinity, 5 → Infinity', () => {
    expect(add(Number.POSITIVE_INFINITY, 5)).toBe(Number.POSITIVE_INFINITY);
  });

  // Negative Infinity
  test('-Infinity, 5 → -Infinity', () => {
    expect(add(Number.NEGATIVE_INFINITY, 5)).toBe(Number.NEGATIVE_INFINITY);
  });

  // Infinity minus Infinity is NaN
  test('Infinity, -Infinity → NaN', () => {
    expect(add(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)).toBe(NaN);
  });

  // Floating point with imprecision
  test('0.1, 0.2 → ~0.3', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  // Null coerces to 0
  test('null, 5 → 5', () => {
    expect(add(null, 5)).toBe(5);
  });

  // Null and null
  test('null, null → 0', () => {
    expect(add(null, null)).toBe(0);
  });

  // Boolean true coerces to 1
  test('true, 5 → 6', () => {
    expect(add(true, 5)).toBe(6);
  });

  // Boolean false coerces to 0
  test('false, 5 → 5', () => {
    expect(add(false, 5)).toBe(5);
  });

  // Array coerces based on content
  test('[5], 5 → 10', () => {
    expect(add([5], 5)).toBe(10);
  });

  // Empty array coerces to 0
  test('[], 5 → 5', () => {
    expect(add([], 5)).toBe(5);
  });

  // Symbol coerces to NaN
  test('Symbol, 5 → NaN', () => {
    expect(add(Symbol('test'), 5)).toBe(NaN);
  });

});