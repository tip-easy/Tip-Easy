const getUserProcessorFunction = require('./get-user-processor');

describe('Get User Processor', () => {
  it('should throw an error if no arguments are provided', async () => {
    expect.assertions(1);
    getUserProcessorFunction().catch(err => {
      expect(err.message).toMatch(/required.+dependency/);
    });
  });

  it('should throw an error if a required argument is not passed', async () => {
    expect.assertions(1);
    getUserProcessorFunction({
      extractTokenFromAuthHeader: () => { },
      // verifyAuth: () => { }
    }).catch(err => {
      expect(err.message).toMatch(/required.+dependency/);
    });
  });

  it('should return an object when passed the correct arguments', async () => {
    expect(typeof await getUserProcessorFunction({
      extractTokenFromAuthHeader: (token) => token,
      verifyAuth: () => ({ body: 'test' })
    }, {})).toMatch(/object/);
  });

  it('should return a user object when passed the correct arguments', async () => {

    expect(await getUserProcessorFunction({
      extractTokenFromAuthHeader: (token) => token,
      verifyAuth: () => ({ body: 'test' })
    }, {})).toMatchObject({
      account_type: expect.any(String),
      name: expect.any(String),
      email: expect.any(String),
      profile_img: expect.any(String),
      unique_code: expect.any(String),
      location: expect.any(String),
      organisation: expect.any(String),
      default_currency: expect.any(String)
    });
  });
});