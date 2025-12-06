import toNumber from '../src/toNumber.js';

describe('toNumber()', () => {

  // Tests that numeric inputs are returned unchanged
  test('Returns the number as it is', () => {
    expect(toNumber(2.4)).toBe(2.4);
    expect(toNumber(0)).toBe(0);
    expect(toNumber(-0)).toBe(-0);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  // null should convert to 0
  test('null → 0', () => {
    expect(toNumber(null)).toBe(0);
  });

  // undefined should convert to NaN
  test('undefined → NaN', () => {
    expect(toNumber(undefined)).toBeNaN();
  });

  // Empty string should convert to 0
  test('empty string "" → 0', () => {
    expect(toNumber('')).toBe(0);
  });

  // Non-numeric strings should convert to NaN
  test('"goat cheece" → NaN', () => {
    expect(toNumber('goat cheece')).toBeNaN();
  });

  // Fully uppercase non-numeric string returns NaN
  test('"CHEDDAR" → NaN', () => {
    expect(toNumber('CHEDDAR')).toBeNaN();
  });

  // Normal word should return NaN
  test('"Edam" → NaN', () => {
    expect(toNumber('Edam')).toBeNaN();
  });

  // Mixed-case word should return NaN
  test('"fEtA" → NaN', () => {
    expect(toNumber('fEtA')).toBeNaN();
  });

  // Emojis inside strings should result in NaN
  test('"😊 mozzarella" → NaN', () => {
    expect(toNumber('😊 mozzarella')).toBeNaN();
  });

  // Accented text should return NaN
  test('"chévre" → NaN', () => {
    expect(toNumber('chévre')).toBeNaN();
  });

  // String with special characters returns NaN
  test('"Leipäjuusto" → NaN', () => {
    expect(toNumber('Leipäjuusto')).toBeNaN();
  });

  // Numeric input remains the same
  test('789 (number) → 789', () => {
    expect(toNumber(789)).toBe(789);
  });

  // Numeric string converts to number
  test('789 (string) → 789', () => {
    expect(toNumber('789')).toBe(789);
  });

  // Object without meaningful valueOf should result in NaN
  test('object { name: "Cheece" } → NaN', () => {
    expect(toNumber({ name: 'Cheece' })).toBeNaN();
  });

  // Symbols should always convert to NaN
  test('symbol → NaN', () => {
    const sym = Symbol('test');
    expect(toNumber(sym)).toBeNaN();
  });

  // Object with a valueOf that returns a number should convert correctly
  test('object with valueOf returning number', () => {
    const valueObj = { valueOf: () => 42 };
    expect(toNumber(valueObj)).toBe(42);
  });

  // Object with valueOf returning a numeric string should convert to number
  test('object with valueOf returning string-number', () => {
    const valueObj = { valueOf: () => '3.2' };
    expect(toNumber(valueObj)).toBe(3.2);
  });

  // Arrays should convert to NaN
  test('array [1, 2] → NaN', () => {
    expect(toNumber([1, 2])).toBeNaN();
  });

  // Binary number string should convert properly
  test('"0b101" (binary) → 5', () => {
    expect(toNumber('0b101')).toBe(5);
  });

  // Octal number string should convert properly
  test('"0o10" (octal) → 8', () => {
    expect(toNumber('0o10')).toBe(8);
  });

  // Leading/trailing whitespace should be trimmed before conversion
  test('"  3.2  " whitespace trim → 3.2', () => {
    expect(toNumber('  3.2  ')).toBe(3.2);
  });

  // Valid hexadecimal should convert correctly
  test('"0x1f" (hex) → 31', () => {
    expect(toNumber('0x1f')).toBe(31);
  });

  // Bad signed hex should return NaN
  test('"-0x1f" (bad hex) → NaN', () => {
    expect(toNumber('-0x1f')).toBeNaN();
  });

});
