const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('It should calculate the sum correctly', async () => {
    const response = await request(app)
      .post('/calculate')
      .type('form')
      .send({ num1: '5', num2: '10' });
    expect(response.text).toMatch(/Sum = 15/);
  });

  test('It should show an error for invalid inputs', async () => {
    const response = await request(app)
      .post('/calculate')
      .type('form')
      .send({ num1: '-5', num2: 'abc' });
    expect(response.text).toMatch(/Please enter positive integers only./);
  });
});
