const request = require('supertest');
const app = require('../src/app');

describe('GET /sum', () => {
  it('suma dos numeros', async () => {
    const res = await request(app).get('/sum?a=2&b=3');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(5);
  });

  it('suma numeros negativos', async () => {
    const res = await request(app).get('/sum?a=-4&b=10');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(6);
  });

  it('regresa 400 cuando algun parametro no es numero', async () => {
    const res = await request(app).get('/sum?a=hola&b=3');
    expect(res.status).toBe(400);
  });
});
