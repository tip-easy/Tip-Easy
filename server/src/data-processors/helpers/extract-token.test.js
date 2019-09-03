const extractTokenFromAuthHeader = require('./extract-token');

describe('Extract Token From Auth Header Function', () => {
  it('should return false if not passed any arguments', () => {
    expect(extractTokenFromAuthHeader()).toBe(false);
  });

  it('should throw an error if an argument of invalid type is provided', () => {
    expect(() => extractTokenFromAuthHeader(['token'])).toThrow(/token.+type.+string/);
    expect(() => extractTokenFromAuthHeader(54321)).toThrow(/token.+type.+string/);
    expect(() => extractTokenFromAuthHeader({})).toThrow(/token.+type.+string/);
  });
  it('should throw an error if the argument is not in the correct format', () => {
    const incorrectlyFormattedAuthHeader = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.AVf-baEv_HW1YLY7Z71bO40NV17eghX48VEpKBYPPHU';
    expect(() => extractTokenFromAuthHeader(incorrectlyFormattedAuthHeader)).toThrow(/token.+formatted.+specification/);
  });

  it('should return an object with appropriate properties when a valid token is provided', () => {
    // Token generated on jwt.io using a secret of "testingsecret"
    const authHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.AVf-baEv_HW1YLY7Z71bO40NV17eghX48VEpKBYPPHU';

    const token = authHeader.replace('Bearer ', '');

    expect(extractTokenFromAuthHeader(authHeader)).toEqual(token);
  });
});