import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public/v1/');
const faker = require('faker');

const TOKEN =
  '689e06fc290077bd8456fafa72af1af503a40e2e0dc8e1d121706e8af6561afe';

export const createRandomUser = async () => {
  const userData = {
    email: `phongtest-${Math.floor(Math.random() * 999)}@gmail.com`,
    name: 'Phong Test1',
    gender: 'male',
    status: 'inactive'
  };

  const res = await request
    .post('users')
    .set('Authorization', `Bearer ${TOKEN}`)
    .send(userData);

  return res.body.data.id;
};

export const createRandomUserWithFaker = async () => {
  const userData = {
    email: faker.internet.email(),
    name: faker.name.findName(),
    gender: 'male',
    status: 'inactive'
  };
  // console.log('user: ', userData);

  const res = await request
    .post('users')
    .set('Authorization', `Bearer ${TOKEN}`)
    .send(userData);

  return res.body.data.id;
};
