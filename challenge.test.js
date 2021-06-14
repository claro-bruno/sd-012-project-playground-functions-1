const { compareTrue } = require('./src/challenges');
const { test, expect } = require('@jest/globals');

test('compare two values', () => {
  expect(compareTrue(1, 1)).toBe(true);
  expect(compareTrue(0, 1)).not.toBe(true);
});
