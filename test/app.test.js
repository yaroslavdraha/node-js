//region [Libraries require]
let chai = require('chai');
let request = require('supertest');
let expect = chai.expect;
let assert = chai.assert;
//endregion

//region [Module require]
const app = require('../src/app');
//endregion


describe('Application', function () {
    describe('GET /', function () {
        it('should return information about Sashko', function (done) {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    const body = res.body;
                    expect(body).to.include({
                        name: "Sashko"
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', function () {
        it('should return Users (/users)', function (done) {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    const body = res.body;
                    expect(body).to.be.an('array');
                    expect(body).to.deep.include({
                        name: "Yaroslav",
                        age: 22
                    });
                })
                .end(done);
        });
    });
});