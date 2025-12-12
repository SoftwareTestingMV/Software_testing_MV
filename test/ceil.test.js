import ceil from '../src/ceil.js';

describe('ceil()', () => {

  // Basic rounding up of decimals
  test('rounds 4.006 up to 5', () => {
    expect(ceil(4.006)).toBe(5);
  });

  test('rounds 4.1 up to 5', () => {
    expect(ceil(4.1)).toBe(5);
  });

  // Precision: rounding up to specific decimal places
  test('rounds 6.004 up to 6.01 with precision 2', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  test('rounds 1.234 up to 1.24 with precision 2', () => {
    expect(ceil(1.234, 2)).toBe(1.24);
  });

  // Negative precision: rounding up on the left side of decimal
  test('rounds 6040 up to 6100 with precision -2', () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  test('rounds 1234 up to 2000 with precision -3', () => {
    expect(ceil(1234, -3)).toBe(2000);
  });

  // Already an integer → no change
  test('rounds 5 up to 5 (already integer)', () => {
    expect(ceil(5)).toBe(5);
  });

  // Negative numbers: rounding up means going toward zero (less negative)
  test('rounds -4.1 up to -4', () => {
    expect(ceil(-4.1)).toBe(-4);
  });

  test('rounds -4.99 up to -4', () => {
    expect(ceil(-4.99)).toBe(-4);
  });

  // Precision with negative numbers
  test('rounds -4.123 up to -4.12 with precision 2', () => {
    expect(ceil(-4.123, 2)).toBe(-4.12);
  });

  // Zero precision explicitly
  test('rounds 4.3 up to 5 with precision 0', () => {
    expect(ceil(4.3, 0)).toBe(5);
  });

  // NaN input should return NaN
  test('returns NaN for invalid number input', () => {
    expect(ceil(NaN)).toBeNaN();
    expect(ceil('goat')).toBeNaN();
  });

  // Non-number precision should be converted using +precision
  test('treats non-numeric precision by converting it to a number', () => {
    expect(ceil(4.004, '2')).toBe(4.01 / 1); // equivalent to precision 2
  });

});
