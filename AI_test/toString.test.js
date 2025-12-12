import toString from '../src/toString.js';

describe('toString', () => {
  test('returns empty string for null', () => {
    expect(toString(null)).toBe('');
  });

  test('returns empty string for undefined', () => {
    expect(toString(undefined)).toBe('');
  });

  test('returns the same string if input is a string', () => {
    expect(toString('hello')).toBe('hello');
  });

  test('converts number to string', () => {
    expect(toString(123)).toBe('123');
  });

  test('preserves negative zero', () => {
    expect(toString(-0)).toBe('-0');
  });

  test('converts array of numbers to comma-separated string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  test('handles nested arrays recursively', () => {
    expect(toString([1, [2, 3], null])).toBe('1,2,3,');
  });

  test('handles array with null and undefined', () => {
    expect(toString([null, undefined, 5])).toBe(',,5');
  });

  test('converts boolean values', () => {
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
  });

  test('converts object to string using default coercion', () => {
    expect(toString({ a: 1 })).toBe('[object Object]');
  });

  test('converts symbol using its toString method', () => {
    const sym = Symbol('test');
    expect(toString(sym)).toBe('Symbol(test)');
  });

  test('converts BigInt to string', () => {
    expect(toString(BigInt(123))).toBe('123');
  });

  test('handles Infinity and NaN', () => {
    expect(toString(Infinity)).toBe('Infinity');
    expect(toString(NaN)).toBe('NaN');
  });
});
