const request = require('supertest');
const app = require('../src/server');

describe('POST /', () => {
    it('responds with sum for positive integers', async () => {
        const response = await request(app)
            .post('/')
            .type('form')
            .send({ number1: '5', number2: '7' });
        expect(response.text).toBe('Sum: 12');
    });

    it('responds with an error for invalid input', async () => {
        const response = await request(app)
            .post('/')
            .type('form')
            .send({ number1: '-1', number2: 'abc' });
        expect(response.text).toBe('Please enter positive integers only.');
    });
});
