require('dotenv').config();
import request from '../config/common';
const faker = require('faker');
import { expect } from 'chai';
import {
  createRandomUser,
  createRandomUserWithFaker
} from '../helper/user_helper';

const TOKEN = process.env.USER_TOKEN;

describe('User Post', () => {
  let postId, userId;

  before(async () => {
    userId = await createRandomUserWithFaker();
  });

  describe('POST', () => {
    it('/posts', async () => {
      const data = {
        user_id: userId,
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraph()
      };

      const res = await request
        .post('posts')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data);
      // console.log('res: ', res.body);
      expect(res.body.data).to.deep.include(data);
      postId = res.body.data.id;
    });

    it('GET /posts/:id', async () => {
      await request
        .get(`posts/${postId}`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(200);
    });
  });

  describe('Negative Tests', () => {
    it('401 Authentication failed', async () => {
      const data = {
        user_id: userId,
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraph()
      };

      const postRes = await request.post('posts').send(data);
      //   console.log('body: ', postRes.body);
      //   console.log('code: ', postRes.statusCode);
      expect(postRes.statusCode).to.eq(401);
      expect(postRes.body.data.message).to.eq('Authentication failed');
    });

    it('422 Validation Failed', async () => {
      const data = {
        user_id: userId,
        title: 'My blog title'
      };

      const postRes = await request
        .post('posts')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(data);
      //   console.log('body: ', postRes.body);
      //   console.log('code: ', postRes.statusCode);
      expect(postRes.statusCode).to.eq(422);
      expect(postRes.body.data[0].field).to.eq('body');
      expect(postRes.body.data[0].message).to.eq("can't be blank");
    });
  });
});
