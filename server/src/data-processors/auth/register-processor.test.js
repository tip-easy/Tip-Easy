const registerProcessorFunction = require('./register-processor');

describe('Register Processor', () => {
  it('should throw an error if no arguments are provided', async () => {
    expect.assertions(1);
    registerProcessorFunction().catch(err => {
      expect(err.message).toMatch(/required.+dependency/);
    });
  });

  it('should throw an error if a required argument is not passed', async () => {
    expect.assertions(1);
    registerProcessorFunction({
      validate: () => { },
      // normalise: () => { }
    }).catch(err => {
      expect(err.message).toMatch(/required.+dependency/);
    });
  });

  it('should return an object when passed the correct arguments', async () => {
    expect(typeof await registerProcessorFunction({
      validate: () => { },
      normalise: () => { },
    }, {})).toMatch(/object/);
  });

  it('should return register success message when passed the correct arguments', async () => {
    expect(await registerProcessorFunction({
      validate: (obj) => obj,
      normalise: (obj) => obj,
    }, {})).toMatchObject({
      message: expect.stringMatching(/successfully registered/i)
    });
  });
});