const request = require('supertest');
const app = require('./app');

describe('Application', () => {
  it('should be running in "testing" environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('Root Endpoint', () => {
    it('should respond with status code of 200', () => {
      return request(app)
        .get('/')
        .expect(200);
    });

    it('should respond with a body', () => {
      return request(app)
        .get('/')
        .then(({ body }) => {
          expect(body).toBeDefined();
        })
    });
  });
});