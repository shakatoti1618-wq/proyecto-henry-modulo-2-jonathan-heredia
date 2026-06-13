const service = require('../services/posts.services');

const getAll = (req, res) => {
    const posts = service.getAll();
    res.status(200).json(posts);
};

const getById = (req, res) => {
    const post = service.getById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.status(200).json(post);
};

const getByAuthorId = (req, res) => {
    const posts = service.getByAuthorId(req.params.authorId);
    res.status(200).json(posts);
};

const create = (req, res) => {
    const { title, content, author_id } = req.body;
    if (!title || !content || !author_id) {
    return res.status(400).json({ error: 'title, content y author_id son obligatorios' });
    }
    const newPost = service.create({ title, content, author_id });
    res.status(201).json(newPost);
};

const update = (req, res) => {
    const updated = service.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Post no encontrado' });
    res.status(200).json(updated);
};

const remove = (req, res) => {
    const deleted = service.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Post no encontrado' });
    res.status(204).send();
};

module.exports = { getAll, getById, getByAuthorId, create, update, remove };