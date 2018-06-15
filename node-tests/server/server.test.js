const request = require ('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('server',() => {
  describe ('#GET /',() =>{
    it('should return hello world response', (done) => {
      request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          error: 'page not found.'
        });
      })
      .end(done);
    });
  });

  describe ('#GET /users',() =>{
  it('should tell that Patryk user exist', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) =>{
      expect(res.body).toInclude({name: 'Patryk',age:10})
    })
    .end(done);
  });
});
});
