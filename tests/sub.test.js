const request = require('supertest');
const app = require('../src/app');

describe('GET /sub', () => {
  it('resta dos numeros', async () => {
    const res = await request(app).get('/sub?a=10&b=4');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(6);
  });

  it('puede regresar numero negativo', async () => {
    const res = await request(app).get('/sub?a=2&b=5');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(-3);
  });

  it('regresa 400 cuando algun parametro no es numero', async () => {
    const res = await request(app).get('/sub?a=hola&b=3');
    expect(res.status).toBe(400);
  });
});
