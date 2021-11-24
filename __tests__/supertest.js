// Testing API endpoints using supertest
const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => {
    describe('/SignUp', () => {
      describe('POST', () => {
        // Successful
        it('responds with 200 status and text/plain content type', () => {
          return request(server)
            .post('/SignUp')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200);
        });
      });
    });
  
    describe('/Login', () => {
      describe('POST', () => {
        // Successful login with existing user, correct password
        it('responds with 200 status and text/plain content type on login success', () => {
            return request(server)
                .post('/Login')
                .send({ username: 'test', password: 'test' })
                .expect('Content-Type', 'text/plain; charset=utf-8')
                .expect(200);
        });

        // Failure to log in (no existing user)
        it('responds with 400 status and  application/json content type if user does not exist', () => {
            return request(server)
                .post('/Login')
                .send({ username: 'noExistingUser', password: 'test' })
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(400);
        });

        // Failure to login: user exists, but password is incorrect
        it('responds with 400 status and application/json content type on wrong password', () => {
            return request(server)
                .post('/Login')
                .send({ username: 'test', password: 'wrongPassword' })
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(400);
        });

        // Failure to login: Username is empty string
        it('responds with 400 status and application/json content type if username is empty string', () => {
            return request(server)
                .post('/Login')
                .send({ username: '', password: '' })
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(400);
        });

      });
    });
  });