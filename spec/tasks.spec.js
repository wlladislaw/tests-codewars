const {
  positiveSum,
  opposite,
  removeChar,
  repeatStr
} = require('../tasks.js');


describe('Sum of positive', () => {
  it('sum of positive numbers from array', () => {
    expect(positiveSum([-2, 21, 21, -4])).toEqual(42);
    expect(positiveSum([-2, 2, 3, 8, 1, -4])).toEqual(14);
  });

  it('return correctly comparing value', () => {
    expect(positiveSum([-9, -15, -33, 55, 56])).toBeGreaterThan(110);
    expect(positiveSum([-2, 2, 3, 8, 1, -4])).toBeGreaterThan(8);
    expect(positiveSum([-9, -15, -33, 55, 56])).toBeLessThan(112);
  });
  it(' not empty array', () => {
    expect(positiveSum([1, 2])).toBeTruthy();
  });
  it('greater or equal than 3.5', () => {

    expect(positiveSum([1, 0.4, 0.7, 2, -99])).toBeGreaterThanOrEqual(3.5);
    expect(positiveSum([1, 0.5, 2, -99])).toBeGreaterThanOrEqual(3.5);
    expect(positiveSum([1, 0.55, 2, -99])).toBeGreaterThanOrEqual(3.5);
  });
  it('less 4.5', () => {
    expect(positiveSum([-33, -76, 1, 2, 0.3, 0.9])).toBeLessThanOrEqual(4.5);
  });
});

describe('Opposite number', () => {
  test('negative num', () => {
    expect(opposite(5)).toBe(-5);
  });
  test('return correctly comparing value', () => {
    expect(opposite(5)).toBeGreaterThan(-6);
  });
  test('77 = - 77', () => {
    expect(opposite(77)).toBe(-77);
  });
  test('less than -12,6', () => {
    expect(opposite(12.8)).toBeLessThan(-12, 6);
    expect(opposite(42)).toBeLessThan(-12, 6);
    expect(opposite(13)).toBeLessThan(-12, 6);
    expect(opposite(12.7)).toBeLessThan(-12, 6);
  });
  test('more or equal -42', () => {
    expect(opposite(41)).toBeGreaterThanOrEqual(-42);
    expect(opposite(42)).toBeGreaterThanOrEqual(-42);
    expect(opposite(33)).toBeGreaterThanOrEqual(-42);
    expect(opposite(1)).toBeGreaterThanOrEqual(-42);
  });

});

describe('Remove First and Last Character', () => {
  test('remove str', () => {
    expect(removeChar('book')).toBe('oo');
  });
  test('mere without m', () => {
    expect(removeChar('mere')).not.toMatch(/m/);
  });
  test('there is a "par" in leopard', () => {
    expect(removeChar('leopard')).toMatch(/par/);
  });
  test('not empty string', () => {
    expect(removeChar(' ')).not.toBeUndefined();
    expect(removeChar('1')).not.toBeUndefined();
    expect(removeChar('fr')).not.toBeUndefined();
  });
  test('there is a "qu"', () => {
    expect(removeChar('aqua')).toMatch(/qu/);
    expect(removeChar('aquatory')).toMatch(/qu/);
    expect(removeChar('Saqura')).toMatch(/qu/);
  });

});


describe('Repeat string', () => {
  test('repeat str', () => {
    expect(repeatStr(3, 'Salute')).toBe('SaluteSaluteSalute');
  });
  test('repeat str 7 times', () => {
    expect(repeatStr(7, 'lux')).toBe('luxluxluxluxluxluxlux');
  });
  test('repeat str 2 times', () => {
    expect(repeatStr(2, 'Salmon')).toBe('SalmonSalmon');
    expect(repeatStr(2, 'monday')).toBe('mondaymonday');
  });
  test('there is no "a" in teams', () => {
    expect(repeatStr(3, 'Broncos')).not.toMatch(/a/);
    expect(repeatStr(4, 'Chiefs')).not.toMatch(/a/);
  });
  test('there is a " " in Seattle Seahawks', () => {
    expect(repeatStr(5, 'Seattle Seahawks')).toMatch(/ /);
  });

});
