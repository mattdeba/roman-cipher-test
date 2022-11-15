const request = require('supertest');
const app = require('../src/app');

test('should return the roman cipher conversion', async () => {
    const response = await request(app)
        .get('/converter')
        .query({ number: '9' })
        .expect(200);

    expect(response.body).toEqual({
        romanNumber: 'IX',
    });
});

test('should return an error if the number is below 0', async () => {
    const response = await request(app)
        .get('/converter')
        .query({ number: '-1' })
        .expect(500);
});

test('should return an error if the number is beyond 100', async () => {
    const response = await request(app)
        .get('/converter')
        .query({ number: '101' })
        .expect(500);
});
