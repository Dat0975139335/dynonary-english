var request = require('supertest'),
  app = require('../../index');

bef

describe('Functional Test <Sessions>:', function () {
  it('should create user session for valid user', function (done) {
    request(app)
      .post('account/login')
      .set('Accept', 'application/json')
      .send({ email: 'hoanganh36.work@gmail.com', password: '123456' })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        console.log(res);
        done();
      });
  });
  it('should log out', function (done) {
    var req = request(app).post('account/logout');
    req
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        done();
      });
  });
});
