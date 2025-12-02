import toNumber from './toNumber.js';

describe('toNumber()', () => {

  test('palauttaa numerin sellaisenaan', () => {
    expect(toNumber(2.4)).toBe(2.4);
    expect(toNumber(0)).toBe(0);
    expect(toNumber(-0)).toBe(-0);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test('null → 0', () => {
    // +null === 0
    expect(toNumber(null)).toBe(0);
  });

  test('undefined → NaN', () => {
    // +undefined === NaN
    expect(toNumber(undefined)).toBeNaN();
  });

  test('tyhjä string "" → 0', () => {
    // +'' === 0
    expect(toNumber('')).toBe(0);
  });

  test('"goat cheece" → NaN', () => {
    expect(toNumber('goat cheece')).toBeNaN();
  });

  test('"CHEDDAR" → NaN', () => {
    expect(toNumber('CHEDDAR')).toBeNaN();
  });

  test('"Edam" → NaN', () => {
    expect(toNumber('Edam')).toBeNaN();
  });

  test('"fEtA" → NaN', () => {
    expect(toNumber('fEtA')).toBeNaN();
  });

  test('"😊 mozzarella" → NaN', () => {
    // emoji ei haittaa, mutta kokonaisuus ei ole numero
    expect(toNumber('😊 mozzarella')).toBeNaN();
  });

  test('"chévre" → NaN', () => {
    expect(toNumber('chévre')).toBeNaN();
  });

  test('"Leipäjuusto" → NaN', () => {
    expect(toNumber('Leipäjuusto')).toBeNaN();
  });

  test('789 (numero) → 789', () => {
    expect(toNumber(789)).toBe(789);
  });

  test('789 (string) → 789', () => {
    expect(toNumber('789')).toBe(789);
  });

  test('objekti { name: "Cheece" } → NaN', () => {
    // valueOf → objekti → `${other}` → "[object Object]" → +"... " === NaN
    expect(toNumber({ name: 'Cheece' })).toBeNaN();
  });

  // Erityistapauksia isObject/isSymbol -polkuja varten

  test('symbol → NaN', () => {
    const sym = Symbol('test');
    expect(toNumber(sym)).toBeNaN();
  });

  test('objekti, jonka valueOf palauttaa numeron', () => {
    const valueObj = { valueOf: () => 42 };
    expect(toNumber(valueObj)).toBe(42);
  });

  test('objekti, jonka valueOf palauttaa string-numeron', () => {
    const valueObj = { valueOf: () => '3.2' };
    expect(toNumber(valueObj)).toBe(3.2);
  });

  test('taulukko [1, 2] → NaN', () => {
    // valueOf → itse taulukko, lopulta "1,2" → + '1,2' === NaN
    expect(toNumber([1, 2])).toBeNaN();
  });

  // Binääri / oktaali / hex / whitespace

  test('"0b101" (binääri) → 5', () => {
    expect(toNumber('0b101')).toBe(5);
  });

  test('"0o10" (oktaali) → 8', () => {
    expect(toNumber('0o10')).toBe(8);
  });

  test('"  3.2  " whitespace trim → 3.2', () => {
    expect(toNumber('  3.2  ')).toBe(3.2);
  });

  test('"0x1f" (hex) → 31', () => {
    // ei kuulu "bad hex" -regexiin, joten +value
    expect(toNumber('0x1f')).toBe(31);
  });

  test('"-0x1f" (bad hex) → NaN', () => {
    expect(toNumber('-0x1f')).toBeNaN();
  });
});
