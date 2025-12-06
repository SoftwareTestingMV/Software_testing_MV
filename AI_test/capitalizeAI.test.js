// This unit test is made using Copilot.


// __tests__/capitalize.test.js
import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
  // Converts all uppercase letters to proper capitalization
  test('converts all uppercase letters to proper capitalization', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  // Converts a normal lowercase word
  test('converts a normal lowercase word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  // Keeps the first letter uppercase and lowercases the rest
  test('keeps the first letter uppercase and lowercases the rest', () => {
    expect(capitalize('hELLO wORLD')).toBe('Hello world');
  });

  // Handles empty string input
  test('handles empty string input', () => {
    expect(capitalize('')).toBe('');
  });

  // Handles undefined input (Lodash behavior: "Undefined")
  test('handles undefined input', () => {
    expect(capitalize(undefined)).toBe('Undefined');
  });

  // Handles null input (Lodash behavior: "Null")
  test('handles null input', () => {
    expect(capitalize(null)).toBe('Null');
  });

  // Converts numbers to strings without changing digits
  test('converts numbers to strings without changing digits', () => {
    expect(capitalize(123)).toBe('123');
    expect(capitalize(0)).toBe('0');
  });

  // Converts booleans to strings and capitalizes first letter
  test('converts booleans to strings and capitalizes first letter', () => {
    expect(capitalize(true)).toBe('True');
    expect(capitalize(false)).toBe('False');
  });

  // Works with objects that have a custom toString method
  test('works with objects that have a custom toString method', () => {
    const o = { toString: () => 'CUSTOM' };
    expect(capitalize(o)).toBe('Custom');
  });

  // Keeps non-alphabetic first characters unchanged
  test('keeps non-alphabetic first characters unchanged', () => {
    expect(capitalize('123abc')).toBe('123abc');
    expect(capitalize('_underscore')).toBe('_underscore');
  });

  // Handles leading spaces correctly
  test('handles leading spaces correctly', () => {
    expect(capitalize('   space')).toBe('   space');
    expect(capitalize('   test')).toBe('   test');
  });

  // Works with emojis
  test('works with emojis', () => {
    expect(capitalize('😀smile')).toBe('😀smile');
  });

  // Works with non-Latin characters (Nordic letters)
  test('works with non-Latin characters (Nordic letters)', () => {
    expect(capitalize('åke')).toBe('Åke');
    expect(capitalize('äITI')).toBe('Äiti');
    expect(capitalize('øystein')).toBe('Øystein');
  });

  // Works with Greek and Cyrillic characters
  test('works with Greek and Cyrillic characters', () => {
    expect(capitalize('привет')).toBe('Привет');
    expect(capitalize('ελλάδα')).toBe('Ελλάδα');
  });

  // Does not change a string that is already properly capitalized
  test('does not change a string that is already properly capitalized', () => {
    expect(capitalize('Fred')).toBe('Fred');
  });
});
