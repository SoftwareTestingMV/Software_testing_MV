import filter from '../src/filter.js';

describe('filter()', () => {

  test('filters active users', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ];
    expect(filter(users, ({ active }) => active))
      .toStrictEqual([{ user: 'barney', active: true }]);
  });

  test('filters inactive users', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false }
    ];
    expect(filter(users, ({ active }) => !active))
      .toStrictEqual([{ user: 'fred', active: false }]);
  });

  test('returns [] for empty input', () => {
    expect(filter([], () => true)).toEqual([]);
  });

  test('returns all elements when predicate always true', () => {
    expect(filter([1, 2, 3, 4, 5], () => true)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  test('returns [] when predicate always false', () => {
    expect(filter([1, 2, 3], () => false)).toEqual([]);
  });

  test('filters out value 2 from array', () => {
    expect(filter([1, 2, 3], elem => elem !== 2)).toStrictEqual([1, 3]);
  });

  test('filters "a" characters from string input', () => {
    expect(filter('abcdaaaefaa', ch => ch === 'a'))
      .toStrictEqual(['a', 'a', 'a', 'a', 'a', 'a']);
  });

  test('does not mutate the original array', () => {
    const input = [1, 2, 3];
    const snapshot = [...input];
    const result = filter(input, n => n > 1);
    
    expect(input).toStrictEqual(snapshot);
    expect(result).toStrictEqual([2, 3]);
    expect(result).not.toBe(input);
  });

  test('filters falsy values', () => {
    const input = [0, '', null, undefined, false, 'ok'];
    expect(filter(input, Boolean)).toStrictEqual(['ok']);
  });

});
