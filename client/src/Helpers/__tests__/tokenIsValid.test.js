const { tokenIsValid } = require('../tokenIsValid');

describe('tokenIsValid Helper', () => {
  test('returns true if passed a string', () => {
    expect(tokenIsValid("AAABBBCCC")).toBe(true);
  })
  
  test('returns false if passed something other than a string', () => {
    expect(tokenIsValid({token: "AAABBBCCC"})).toBe(false);
  })
});