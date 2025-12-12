import endsWith from '../src/endsWith.js';

describe('endsWith()', () => {

  // Simple positive case
  test('"goat cheece" ends with "cheece"', () => {
    expect(endsWith("goat cheece", "cheece")).toBe(true);
  });

  // Simple negative case
  test('"goat cheece" does not end with "goat"', () => {
    expect(endsWith("goat cheece", "goat")).toBe(false);
  });

  // Uppercase string should still compare correctly
  test('"CHEDDAR" ends with "DAR"', () => {
    expect(endsWith("CHEDDAR", "DAR")).toBe(true);
  });

  // Lowercase search for uppercase string → mismatch
  test('"CHEDDAR" does not end with "dar"', () => {
    expect(endsWith("CHEDDAR", "dar")).toBe(false);
  });

  // Already properly written string
  test('"Edam" ends with "dam"', () => {
    expect(endsWith("Edam", "dam")).toBe(true);
  });

  // Mixed-case
  test('"fEtA" ends with "tA"', () => {
    expect(endsWith("fEtA", "tA")).toBe(true);
  });

  // Emoji handling
  test('"😊 mozzarella" ends with "mozzarella"', () => {
    expect(endsWith("😊 mozzarella", "mozzarella")).toBe(true);
  });

  test('"😊 mozzarella" does not end with the emoji', () => {
    expect(endsWith("😊 mozzarella", "😊")).toBe(false);
  });

  // Accented characters
  test('"chévre" ends with "évre"', () => {
    expect(endsWith("chévre", "évre")).toBe(true);
  });

  // Native special characters
  test('"Leipäjuusto" ends with "juusto"', () => {
    expect(endsWith("Leipäjuusto", "juusto")).toBe(true);
  });

  // Empty string and empty target
  test('empty string ends with empty target', () => {
    expect(endsWith("", "")).toBe(true);
  });

  // Empty string cannot end with non-empty target
  test('empty string does not end with "a"', () => {
    expect(endsWith("", "a")).toBe(false);
  });

  // Number converted to string implicitly
  test('number converted to string: 789 ends with "89"', () => {
    expect(endsWith(String(789), "89")).toBe(true);
  });

  // Position parameter restricting match
  test('"goat cheece" ends with "t" when position is 4', () => {
    expect(endsWith("goat cheece", "t", 4)).toBe(true); // "goat"
  });

  // Position too small → false
  test('"Leipäjuusto" does not end with "juusto" when position is 3', () => {
    expect(endsWith("Leipäjuusto", "juusto", 3)).toBe(false);
  });

  // Position larger than string length → clamped
  test('oversized position clamps to full length', () => {
    expect(endsWith("goat cheece", "cheece", 999)).toBe(true);
  });

  // Negative position becomes 0, so only empty substring is compared
  test('negative position results in false unless target is empty', () => {
    expect(endsWith("goat", "g", -5)).toBe(false);  
    // position set to 0 → checking empty slice
    expect(endsWith("goat", "", -5)).toBe(true);
  });

  // NaN position becomes 0
  test('NaN position is treated as 0', () => {
    expect(endsWith("fEtA", "f", NaN)).toBe(false);
    expect(endsWith("fEtA", "", NaN)).toBe(true);
  });

  // Target longer than string
  test('target longer than string always fails', () => {
    expect(endsWith("Edam", "Edammmmm")).toBe(false);
  });

});
