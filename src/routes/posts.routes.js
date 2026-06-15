const express = require('express');
const router = express.Router();
const controller = require('../controllers/posts.controller');
const { validatePost } = require('../middlewares/validateFields');

router.get('/', controller.getAll);
router.get('/author/:authorId', controller.getByAuthorId);
router.get('/:id', controller.getById);
router.post('/', validatePost, controller.create);
router.put('/:id', validatePost, controller.update);
router.delete('/:id', controller.remove);

module.exports = router;