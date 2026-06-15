const request = require('supertest');
const app = require('../src/app');

describe('AUTHORS', () => {

    test('GET /authors - debe retornar lista de autores', async () => {
    const res = await request(app).get('/authors');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    });

    test('GET /authors/:id - debe retornar un author', async () => {
    const res = await request(app).get('/authors/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
    });

    test('GET /authors/:id - debe retornar 404 si no existe', async () => {
    const res = await request(app).get('/authors/999');
    expect(res.status).toBe(404);
    });

    test('POST /authors - debe crear un author', async () => {
    const email = `test${Date.now()}@test.com`;
    const res = await request(app)
    .post('/authors')
    .send({ name: 'Test User', email: email, bio: 'Test bio' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Test User');
});

    test('POST /authors - debe retornar 400 si falta name o email', async () => {
    const res = await request(app)
    .post('/authors')
    .send({ bio: 'Sin nombre ni email' });
    expect(res.status).toBe(400);
    });

});

describe('POSTS', () => {

    test('GET /posts - debe retornar lista de posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    });

    test('GET /posts/:id - debe retornar un post', async () => {
    const res = await request(app).get('/posts/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('content');
    });

    test('GET /posts/:id - debe retornar 404 si no existe', async () => {
    const res = await request(app).get('/posts/999');
    expect(res.status).toBe(404);
    });

    test('POST /posts - debe crear un post', async () => {
    const res = await request(app)
    .post('/posts')
    .send({ title: 'Test post', content: 'Contenido test', author_id: 1 });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test post');
    });

    test('POST /posts - debe retornar 400 si faltan campos', async () => {
    const res = await request(app)
    .post('/posts')
    .send({ title: 'Sin content ni author' });
    expect(res.status).toBe(400);
    });

});

afterAll(async () => {
    const pool = require('../src/db/pool');
    await pool.end();
});