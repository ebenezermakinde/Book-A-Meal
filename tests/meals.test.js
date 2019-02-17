// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

// configure chai
chai.use(chaiHttp);
chai.should();

describe('Meals', () => {
  describe('GET /api/v1/meals', () => {
    // Test to get all meals record
    it('should get all meals record', (done) => {
      chai.request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
  describe('POST /api/v1/meals', () => {
    // Test to post a meal.
    it('should create a meal record', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
