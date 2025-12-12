import toString from '../src/toString.js';

describe('toString()', () => {

  // Null converts to empty string
  test('null → "" (empty string)', () => {
    expect(toString(null)).toBe('');
  });

  // Undefined converts to empty string
  test('undefined → "" (empty string)', () => {
    expect(toString(undefined)).toBe('');
  });

  // String should return unchanged
  test('"hello, world" → "hello, world"', () => {
    expect(toString('hello, world')).toBe('hello, world');
  });

  // Boolean false converts to string
  test('false → "false"', () => {
    expect(toString(false)).toBe('false');
  });

  // Symbol converts to Symbol string representation
  test('Symbol("foo") → "Symbol(foo)"', () => {
    expect(toString(Symbol('foo'))).toBe('Symbol(foo)');
  });

  // Zero converts to string
  test('0 → "0"', () => {
    expect(toString(0)).toBe('0');
  });

  // BigInt converts to string
  test('BigInt(42) → "42"', () => {
    expect(toString(BigInt(42))).toBe('42');
  });

  // Plain object converts to [object Object]
  test('plain object -> [object Object]', () => {
    expect(toString(new Object({name: 'Bryndza', price: 7.99})))
      .toBe('[object Object]');
  });

  // Negative zero preserves sign
  test('-0 → "-0"', () => {
    expect(toString(-0)).toBe('-0');
  });

  // Array converts to comma-separated values
  test('[1, 2, 3] → "1,2,3"', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  // Mixed array handles all types with empty slots for null/undefined
  test('[1, "bar", true, null, undefined] → "1,bar,true,,"', () => {
    expect(toString([1, 'bar', true, null, undefined])).toBe('1,bar,true,,');
  });

  // Negative decimal converts to string
  test('-42.8 → "-42.8"', () => {
    expect(toString(-42.8)).toBe('-42.8');
  });

  // NaN converts to string
  test('NaN → "NaN"', () => {
    expect(toString(NaN)).toBe('NaN');
  });

  // Positive Infinity converts to string
  test('Infinity → "Infinity"', () => {
    expect(toString(Number.POSITIVE_INFINITY)).toBe('Infinity');
  });

  // Special characters are preserved
  test('"mäsiar" → "mäsiar"', () => {
    expect(toString('mäsiar')).toBe('mäsiar');
  });

  // Date converts to string representation
  test('Date("1995-12-17T03:24:00") matches pattern', () => {
    const date = new Date('1995-12-17T03:24:00');
    expect(toString(date)).toBe(date.toString());
  });

  // Escape sequences are preserved
  test('String with escape sequences preserved', () => {
    expect(toString('!@#$%^&*()_+{}[];:\'\"<>,.?/~\n\t')).toBe('!@#$%^&*()_+{}[];:\'\"<>,.?/~\n\t');
  });

  // Function converts to string representation
  test('Function converts to string representation', () => {
    expect(toString(function foo() { return 42; }).replace(/\s+/g, ''))
      .toBe('function foo() {\n\treturn 42;\n}'.replace(/\s+/g, ''));
  });

});