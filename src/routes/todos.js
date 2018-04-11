const router = require('express').Router();
const TodoController = require('../controllers/todos');

router.get('/', TodoController.getAll);
router.post('/', TodoController.create);
router.get('/:id', TodoController.getById);
router.delete('/:id', TodoController.delete);

module.exports = router;