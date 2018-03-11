//region [Libraries require]
let request = require('supertest');
let {expect, assert} = require('chai');
const ObjectID = require('mongodb').ObjectID;
//endregion

//region [Module require]
const app = require('../src/app');
const Todo = require('../src/models/todo');
//endregion

const todos = [
  {_id: new ObjectID(), text: 'First test todo'},
  {_id: new ObjectID(), text: 'Second test todo'}
];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
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
            expect(todos).to.have.lengthOf(3);
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
            expect(todos).to.have.lengthOf(2);
            done();
          }).catch((err) => {
            done(err);
          });
        });
    });
  });

  describe('GET /todos', () => {
    it('should get all todos', (done) => {
      request(app)
        .get('/todos')
        .expect(200)
        .expect(res => {
          expect(res.body.todos.length).to.equal(2);
        })
        .end(done);
    });
  });

  describe('GET /todos/:id', () => {
    it('should get todo by id', (done) => {
      let firstTodo = todos[0];

      request(app)
        .get(`/todos/${firstTodo._id.toHexString()}`)
        .expect(200)
        .expect(res => {
          expect(res.body.todo.text).to.equal(firstTodo.text);
        })
        .end(done);
    });

    it('should not get todo for invalid id', (done) => {
      request(app)
        .get('/todos/213123')
        .expect(400)
        .expect(res => {
          expect(Object.keys(res.body)).to.be.lengthOf(0);
        })
        .end(done);
    });

    it('should not get todo for not existing id', (done) => {
      request(app)
        .get('/todos/7aa42ffe0631590a40f6d991')
        .expect(404)
        .expect(res => {
          expect(Object.keys(res.body)).to.be.lengthOf(0);
        })
        .end(done);
    });
  });

  describe('DELETE /todos/:id', () => {
    it('should remove First test todo', (done) => {
      let firstTodoId = todos[0]._id.toHexString();

      request(app)
        .delete(`/todos/${firstTodoId}`)
        .expect(200)
        .expect(res => {
          expect(res.body.text).to.equal(todos[0].text);
        })
        .end((err, res) => {
          if (err) {
            done(err);
          }

          Todo.findById(firstTodoId).then(todo => {
            expect(todo).to.equal(null);
            done();
          }, (err) => {
            done(err);
          })
        })
    });


    it('should not remove todo by invalid id', (done) => {
      request(app)
        .delete('/todos/71295')
        .expect(400)
        .expect(res => {
          expect(res.body.message).to.be.a('string');
        })
        .end(done);
    });
  });
});
