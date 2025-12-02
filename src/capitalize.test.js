// This test tests function capitalize like it was planned
// in the test plan

import capitalize from './capitalize.js';

describe('capitalize()', () => {

  test('1. null → "null"', () => {
    // toString(null) = "null"
    expect(capitalize(null)).toBe("Null");
  });

  test('2. undefined → "undefined"', () => {
    // toString(undefined) = "undefined"
    expect(capitalize(undefined)).toBe("Undefined");
  });

  test('3. empty string "" → ""', () => {
    expect(capitalize("")).toBe("");
  });

  test('4. "goat cheece" → "Goat cheece"', () => {
    expect(capitalize("goat cheece")).toBe("Goat cheece");
  });

  test('5. "CHEDDAR" → "Cheddar"', () => {
    expect(capitalize("CHEDDAR")).toBe("Cheddar");
  });

  test('6. "Edam" → "Edam"', () => {
    expect(capitalize("Edam")).toBe("Edam");
  });

  test('7. "fEtA" → "Feta"', () => {
    expect(capitalize("fEtA")).toBe("Feta");
  });

  test('8. "😊 mozzarella" keeps emoji unchanged', () => {
    // toLowerCase affects only letters, not emoji
    expect(capitalize("😊 mozzarella")).toBe("😊 mozzarella");
  });

  test('9. "chévre" → "Chévre"', () => {
    // lowercases accented word, then uppercases first character
    expect(capitalize("chévre")).toBe("Chévre");
  });

  test('10. "Leipäjuusto" → "Leipäjuusto"', () => {
    // Already correct capitalization
    expect(capitalize("Leipäjuusto")).toBe("Leipäjuusto");
  });

  test('11. number 789 → "789"', () => {
    // toString(789) = "789"
    expect(capitalize(789)).toBe("789");
  });

  test('12. object { name: "Cheece" } → "[object object]"', () => {
    // toString({}) = "[object object]"
    expect(capitalize({ name: "Cheece" })).toBe("[object object]");
  });

});
