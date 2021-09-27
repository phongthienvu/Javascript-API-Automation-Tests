// //token: 689e06fc290077bd8456fafa72af1af503a40e2e0dc8e1d121706e8af6561afe
// import supertest from 'supertest';
// const request = supertest('https://gorest.co.in/public/v1/');
// import { expect } from 'chai';

// const TOKEN =
//   '689e06fc290077bd8456fafa72af1af503a40e2e0dc8e1d121706e8af6561afe';

// xdescribe('Users', () => {
//   it('GET /users', () => {
//     // request.get(`users?access-token=${TOKEN}`).end((err, res) => {
//     //   expect(res.body.data).to.be.empty;
//     //   done();
//     // });

//     return request.get(`users?access-token=${TOKEN}`).then(res => {
//       expect(res.statusCode).to.eq(200);
//       expect(res.body.data).to.not.be.empty;
//     });
//   });

//   it('GET /users/:id', () => {
//     return request.get(`users/67?access-token=${TOKEN}`).then(res => {
//       expect(res.statusCode).to.eq(200);
//       expect(res.body.data.id).to.be.eq(67);
//     });
//   });

//   it('GET /users with query params', () => {
//     const url = `users?access-token=${TOKEN}&page=3&status=active&gender=male`;
//     return request.get(url).then(res => {
//       expect(res.statusCode).to.eq(200);
//       expect(res.body.data).to.not.be.empty;
//       expect(res.body.meta.pagination.page).to.eq(3);
//       res.body.data.forEach(element => {
//         expect(element.gender).to.eq('male');
//         expect(element.status).to.eq('active');
//       });
//     });
//   });

//   it.skip('POST /users', () => {
//     const data = {
//       email: `phongtest-${Math.floor(Math.random() * 999)}@gmail.com`,
//       name: 'Phong Test1',
//       gender: 'male',
//       status: 'inactive'
//     };

//     return request
//       .post('users')
//       .set('Authorization', `Bearer ${TOKEN}`)
//       .send(data)
//       .then(res => {
//         // console.log('code:: ', res.statusCode);
//         // console.log('res:: ', res.body);
//         expect(res.statusCode).to.eq(201);
//         // expect(res.body.data.email).to.eq(data.email);
//         // expect(res.body.data.name).to.eq(data.name);
//         // expect(res.body.data.gender).to.eq(data.gender);
//         // expect(res.body.data.status).to.eq(data.status);
//         expect(res.body.data).to.deep.include(data);
//       });
//   });

//   it.skip('PUT /users/:id', () => {
//     const data = {
//       status: 'active',
//       name: `Phong-${Math.floor(Math.random() * 999)}`
//     };

//     return request
//       .put('users/182')
//       .set('Authorization', `Bearer ${TOKEN}`)
//       .send(data)
//       .then(res => {
//         // console.log('code:: ', res.statusCode);
//         // console.log('res:: ', res.body);
//         expect(res.statusCode).to.eq(200);
//         expect(res.body.data).to.deep.include(data);
//       });
//   });

//   it.skip('DELETE /users/:id', () => {
//     return request
//       .delete('users/69')
//       .set('Authorization', `Bearer ${TOKEN}`)
//       .then(res => {
//         expect(res.body.data).to.be.eq(null);
//       });
//   });
// });
