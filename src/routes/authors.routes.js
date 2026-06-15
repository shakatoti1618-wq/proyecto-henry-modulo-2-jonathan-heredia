const express = require('express');
const router = express.Router();
const controller = require('../controllers/authors.controller');
const { validateAuthor } = require('../middlewares/validateFields');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validateAuthor, controller.create);
router.put('/:id', validateAuthor, controller.update);
router.delete('/:id', controller.remove);

module.exports = router;