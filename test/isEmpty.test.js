import isEmpty from '../src/isEmpty.js';

describe('isEmpty()', () => {

  // Null should return true
  test('null → true', () => {
    expect(isEmpty(null)).toBe(true);
  });

  // Boolean true should return true
  test('true → true', () => {
    expect(isEmpty(true)).toBe(true);
  });

  // Number should return true
  test('1 → true', () => {
    expect(isEmpty(1)).toBe(true);
  });

  // Non-empty array should return false
  test('[1, 2, 3] → false', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  // Non-empty string should return false
  test('"abc" → false', () => {
    expect(isEmpty("abc")).toBe(false);
  });

  // Object with properties should return false
  test('{ "a": 1 } → false', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });

  // Empty arguments object should return true
  test('arguments with zero arguments → true', () => {
    (
      function withNoArgs() {
        expect(isEmpty(arguments)).toBe(true);
      }
    )();
  });

  // Non-empty arguments object should return false
  test('arguments with one argument → false', () => {
    (
      function withOneArg(number) {
        expect(isEmpty(arguments)).toBe(false);
      }
    )(42);
  });

  // Function with no own properties should return true
  test('function id(x) { return x; } → true', () => {
    expect(isEmpty(function id(x) { return x; })).toBe(true);
  });

  // Empty Buffer should return true
  test('Buffer.alloc(8) → true', () => {
    expect(isEmpty(Buffer.alloc(8))).toBe(true);
  });

  // Non-empty Buffer should return false
  test('Buffer.from([1, 2, 3, 4]) → false', () => {
    expect(isEmpty(Buffer.from([1, 2, 3, 4]))).toBe(false);
  });

  // Empty Map should return true
  test('Map() → true', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  // Non-empty Map should return false
  test('Map([["a", 1], ["b", 2]]) → false', () => {
    expect(isEmpty(new Map([['a', 1], ['b', 2]]))).toBe(false);
  });

  // Empty Set should return true
  test('Set() → true', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  // Non-empty Set should return false
  test('Set([1, 2, 3]) → false', () => {
    expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
  });

  // Empty string should return true
  test('"" (empty string) → true', () => {
    expect(isEmpty("")).toBe(true);
  });

  // Empty object should return true
  test('{} (empty object) → true', () => {
    expect(isEmpty({})).toBe(true);
  });

  // Undefined should return true
  test('undefined → true', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  // Non-enumerable properties are ignored
  test('object with non-enumerable property → true', () => {
    const obj = {};
    Object.defineProperty(obj, 'hidden', {value: 1, enumerable: false});
    expect(isEmpty(obj)).toBe(true);
  });

  // Inherited properties are ignored
  test('object with inherited property → true', () => {
    const proto = {inherited: 1};
    const obj = Object.create(proto);
    expect(isEmpty(obj)).toBe(true);
  });

  // Empty TypedArray should return true
  test('Uint8Array([]) → true', () => {
    expect(isEmpty(new Uint8Array())).toBe(true);
  });

  // Non-empty TypedArray should return false
  test('Uint8Array([1, 2, 3]) → false', () => {
    expect(isEmpty(new Uint8Array([1, 2, 3]))).toBe(false);
  });

  // Empty ArrayBuffer should return true
  test('ArrayBuffer(0) → true', () => {
    expect(isEmpty(new ArrayBuffer(0))).toBe(true);
  });

});