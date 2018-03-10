//region [Libraries require]
let request = require('supertest');
let {expect, assert} = require('chai');
//endregion

//region [Module require]
const app = require('../src/app');
const Todo = require('../src/models/todo');
//endregion

beforeEach((done) => {
  Todo.remove({}).then(() => done());
});

describe('Application', () => {
  describe('POST /todos', () => {
    it('should add new Todo', (done) => {
      let text = 'Test Todo text';

      request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect(res => {
          expect(res.body.text).to.equal(text);
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          Todo.find().then(todos => {
            expect(todos).to.have.lengthOf(1);
            expect(todos[0].text).to.equal(text);

            done();
          }).catch((e) => done(e));
        });
    });

    it('should not create Todo with invalid body data', (done) => {
      request(app)
        .post('/post')
        .send({})
        .expect(404)
        .expect(res => {
          expect(Object.keys(res.body)).to.be.lengthOf(0);
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          Todo.find().then(todos => {
            expect(todos).to.have.lengthOf(0);
            done();
          }).catch((err) => {
            done(err);
          });
        });
    });
  });
});
