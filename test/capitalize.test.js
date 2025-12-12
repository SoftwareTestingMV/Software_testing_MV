// This test tests function capitalize like it was planned
// in the test plan

import capitalize from '../src/capitalize.js';

describe('capitalize()', () => {

  // Test: null should be converted to the string "Null"
  test('1. null → "null"', () => {
    expect(capitalize(null)).toBe("Null");
  });

  // Test: undefined should be converted to the string "Undefined"
  test('2. undefined → "undefined"', () => {
    expect(capitalize(undefined)).toBe("Undefined");
  });

  // Test: empty string should remain an empty string
  test('3. empty string "" → ""', () => {
    expect(capitalize("")).toBe("");
  });

  // Test: lowercase string should have only the first letter capitalized
  test('4. "goat cheece" → "Goat cheece"', () => {
    expect(capitalize("goat cheece")).toBe("Goat cheece");
  });

  // Test: fully uppercase string should become capitalized normally
  test('5. "CHEDDAR" → "Cheddar"', () => {
    expect(capitalize("CHEDDAR")).toBe("Cheddar");
  });

  // Test: already properly capitalized string should stay the same
  test('6. "Edam" → "Edam"', () => {
    expect(capitalize("Edam")).toBe("Edam");
  });

  // Test: mixed uppercase and lowercase letters should be normalized
  test('7. "fEtA" → "Feta"', () => {
    expect(capitalize("fEtA")).toBe("Feta");
  });

  // Test: emojis should remain unchanged and not affect capitalization
  test('8. "😊 mozzarella" keeps emoji unchanged', () => {
    expect(capitalize("😊 mozzarella")).toBe("😊 mozzarella");
  });

  // Test: accented characters should be handled correctly
  test('9. "chévre" → "Chévre"', () => {
    expect(capitalize("chévre")).toBe("Chévre");
  });

  // Test: string with special characters (ä, ö) should be processed normally
  test('10. "Leipäjuusto" → "Leipäjuusto"', () => {
    expect(capitalize("Leipäjuusto")).toBe("Leipäjuusto");
  });

  // Test: numbers should be converted to string and capitalized
  test('11. number 789 → "789"', () => {
    expect(capitalize(789)).toBe("789");
  });

  // Test: objects should be converted to their default string representation
  test('12. object { name: "Cheece" } → "[object object]"', () => {
    expect(capitalize({ name: "Cheece" })).toBe("[object object]");
  });

});
