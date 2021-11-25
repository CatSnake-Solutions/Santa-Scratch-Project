// Testing API endpoints using supertest
const request = require('supertest');
const User = require('../server/models/userModel');
const server = 'http://localhost:3000';
const mongoose = require('mongoose');

describe('Route integration', () => {
    describe('/SignUp', () => {
      describe('POST', () => {

      // Before all, delete test2 user
      beforeAll((done) => {
        User.deleteOne({ username: 'test2' }).exec()
          .then(data => {
            done();
          })
          .catch(err => {
            // console.log(err);
            done();
          })
      })

      afterAll((done) => {
        User.deleteOne({ username: 'test2' }).exec()
          .then(data => {
            done();
          })
          .catch(err => {
            done();
          })
      });

      // Successful signup
      it('responds with 200 status and text/plain content type on signup success', () => {
        return request(server)
          .post('/SignUp')
          .send({ name: 'Test User', email: 'test@gmail.com', username: 'test2', password: 'test2' })
          .expect('Content-Type', 'text/plain; charset=utf-8')
          .expect(200);
      });


      // Failure: No username provided
      it('responds with 400 status and  application/json content type if no username', () => {
          return request(server)
              .post('/SignUp')
              .send({ name: 'test', username: '', email: 'test', password: 'test' })
              .expect('Content-Type', 'application/json; charset=utf-8')
              .expect(400);
      });

      // Failure: No Email 
      it('responds with 400 status and application/json content type if email is empty string', () => {
          return request(server)
              .post('/SignUp')
              .send({ name: 'test', username: 'test2', email: '', password: 'test' })
              .expect('Content-Type', 'application/json; charset=utf-8')
              .expect(400);
      });

      // Failure: NO name
      it('responds with 400 status and application/json content type if name is empty string', () => {
          return request(server)
              .post('/SignUp')
              .send({ name: '', username: 'test2', email: 'test', password: 'test' })
              .expect('Content-Type', 'application/json; charset=utf-8')
              .expect(400);
      });

      // Failure: No password
      it('responds with 400 status and application/json content type if password is empty string', () => {
        return request(server)
            .post('/SignUp')
            .send({ name: 'test', username: 'test2', email: 'test', password: '' })
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(400);
      });

    });
  });


  // ********************* functional login tests ***************************************
    describe('/Login', () => {
      describe('POST', () => {
        // Before all, delete test2 user
        beforeAll((done) => {
          User.create({ name: 'test3', email: 'test3@gmail.com', username: 'test3', password: 'test3' })
            .then(data => {
              done();
            })
            .catch(err => {
              done();
            })
        })

        afterAll((done) => {
          User.deleteOne({ username: 'test3' }).exec()
            .then(data => {
              mongoose.connection.close()
                .then(data => {
                  done();
                })
      
            })
            .catch(err => {
              done();
            })
        });

        // beforeAll((done) => {
        //   User.create({ name: 'test', email: 'test@gmail.com', username: 'test2', password: 'test' })
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))
        // })

        // afterAll((done) => {
        //   User.findByIdAndDelete('619e996ecc1dc5a360d7e1f2')
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))
        // });

        // Successful login with existing user, correct password
        it('responds with 200 status and text/plain content type on login success', () => {
            return request(server)
                .post('/Login')
                .send({ username: 'test3', password: 'test3' })
                .expect('Content-Type', 'text/plain; charset=utf-8')
                .expect(200);
        });

        // Failure to log in (no existing user)
        it('responds with 400 status and  application/json content type if user does not exist', () => {
            return request(server)
                .post('/Login')
                .send({ username: 'nonExistentUser', password: 'test' })
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(400);
        });

        // Failure to login: user exists, but password is incorrect
        it('responds with 400 status and application/json content type on wrong password', () => {
            return request(server)
                .post('/Login')
                .send({ username: 'test3', password: 'wrongPassword' })
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