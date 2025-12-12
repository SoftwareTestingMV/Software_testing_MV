import assign from 'lodash/assign';
import defaults from 'lodash/defaults.js';
import defaultsDeep from 'lodash/defaultsDeep.js';
import includes from 'lodash/includes.js';
import merge from 'lodash/merge.js';
import orderBy from 'lodash/orderBy.js';
import sortBy from 'lodash/sortBy.js';

import reduce from '../src/reduce.js';

describe('reduce()', () => {

  test('groups object keys by their values', () => {
    const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (acc, value, key) => {
      (acc[value] || (acc[value] = [])).push(key);
      return acc;
    }, {});

    expect(result).toEqual({
      '1': expect.arrayContaining(['a', 'c']),
      '2': expect.arrayContaining(['b']),
    });
    expect(result['1']).toHaveLength(2);
    expect(result['2']).toHaveLength(1);
  });

  test('array sum with zero initial accumulator', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3);
  });

  test('array sum without initial accumulator uses first element', () => {
    expect(reduce([1, 2], (sum, n) => sum + n)).toBe(3);
  });

  test('array sum with non-zero initial accumulator', () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 2)).toBe(5);
  });

  test('empty array with initial accumulator returns it unchanged', () => {
    expect(reduce([], (acc, v) => acc + v, 10)).toBe(10);
  });

  test('empty object with initial accumulator returns it unchanged', () => {
    const init = { x: 1 };
    expect(reduce({}, (acc, v) => acc, init)).toBe(init);
  });

  test('reduces array of objects using lodash assign', () => {
    const input = [{ a: 1 }, { b: 2 }, { c: 3 }];

    const result = reduce(input, assign, {});

    expect(result).toStrictEqual({ a: 1, b: 2, c: 3 });
  });

  test('reduces array of objects using lodash defaults', () => {
    const input = [{ 'a': 1 }, { 'b': 2 }, { 'a': 3 }];

    const result = reduce(input, defaults, {});

    expect(result).toStrictEqual({ 'a': 1, 'b': 2 });
  });

  test('reduces array of objects using lodash defaultsDeep', () => {
    const input = [{ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } }];

    const result = reduce(input, defaultsDeep, {});

    expect(result).toStrictEqual({ 'a': { 'b': 2, 'c': 3 } });
  });

  test('reduces using lodash includes', () => {
    const result = reduce([2], includes, [1, 2, 3]);
    expect(result).toStrictEqual(true);
  });

  test('reduces array of objects using lodash merge', () => {
    const input = [{ a: { x: 1 } }, { a: { y: 2 } }, { b: 4 }];

    const result = reduce(input, merge, {});

    expect(result).toStrictEqual({ a: { x: 1, y: 2 }, b: 4 });
  });

  test('reduces with lodash orderBy to sort by age then name (ascending)', () => {
    const users = [
      { name: 'Bob',   age: 20 },
      { name: 'Alice', age: 20 },
      { name: 'Cara',  age: 25 },
    ];

    const result = reduce([['age', 'name']], orderBy, users);

    expect(result.map(u => `${u.age}-${u.name}`))
      .toStrictEqual(['20-Alice', '20-Bob', '25-Cara']);
  });

  test('reduces with lodash sortBy to sort by age ascending', () => {
    const users = [
      { name: 'Alice', age: 30 },
      { name: 'Bob',   age: 20 },
      { name: 'Cara',  age: 25 },
    ];

    const result = reduce(['age'], sortBy, users);

    expect(result.map(u => u.name)).toStrictEqual(['Bob', 'Cara', 'Alice']);
    expect(result.map(u => u.age)).toStrictEqual([20, 25, 30]);
  });

});
