//token: 689e06fc290077bd8456fafa72af1af503a40e2e0dc8e1d121706e8af6561afe
import request from '../config/common';
const faker = require('faker');
import { expect } from 'chai';

const TOKEN = process.env.USER_TOKEN;

describe('Users', () => {
  let userId;

  describe('POST', () => {
    it('/users', async () => {
      const data = {
        email: `phongtest-${Math.floor(Math.random() * 999)}@gmail.com`,
        name: 'Phong Test1',
        gender: 'male',
        status: 'inactive'
      };
      try{
        const res = await request
        .post('users')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data);

      expect(res.statusCode).to.eq(201);
      expect(res.body.data).to.deep.include(data);
      userId = res.body.data.id;
      }
      catch(e){
        console.log('error: ', e)
      }
     
    });
  });

  describe('GET', () => {
    it('/users', () => {
      return request.get(`users?access-token=${TOKEN}`).then(res => {
        expect(res.statusCode).to.eq(200);
        expect(res.body.data).to.not.be.empty;
      });
    });

    it('/users/:id', () => {
      return request.get(`users/${userId}?access-token=${TOKEN}`).then(res => {
        expect(res.statusCode).to.eq(200);
        expect(res.body.data.id).to.be.eq(userId);
      });
    });

    it('/users with query params', () => {
      const url = `users?access-token=${TOKEN}&page=3&status=active&gender=male`;
      return request.get(url).then(res => {
        expect(res.statusCode).to.eq(200);
        expect(res.body.data).to.not.be.empty;
        expect(res.body.meta.pagination.page).to.eq(3);
        res.body.data.forEach(element => {
          expect(element.gender).to.eq('male');
          expect(element.status).to.eq('active');
        });
      });
    });
  });

  describe('PUT', () => {
    it('/users/:id', () => {
      const data = {
        status: 'active',
        name: `PhongUpdate-${Math.floor(Math.random() * 999)}`
      };

      return request
        .put(`users/${userId}`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data)
        .then(res => {
          expect(res.statusCode).to.eq(200);
          expect(res.body.data).to.deep.include(data);
        });
    });
  });

  describe('DELETE', () => {
    it('/users/:id', () => {
      return request
        .delete(`users/${userId}`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .then(res => {
          expect(res.statusCode).to.eq(204);
          expect(res.body).to.be.empty;
        });
    });
  });
});
