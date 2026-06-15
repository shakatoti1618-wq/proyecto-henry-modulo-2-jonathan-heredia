const service = require('../services/posts.services');

const getAll = async (req, res) => {
    try {
    const posts = await service.getAll();
    res.status(200).json(posts);
    } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getById = async (req, res) => {
    try {
    const post = await service.getById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.status(200).json(post);
    } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getByAuthorId = async (req, res) => {
    try {
    const posts = await service.getByAuthorId(req.params.authorId);
    res.status(200).json(posts);
    } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const create = async (req, res) => {
    try {
    const { title, content, author_id } = req.body;
    if (!title || !content || !author_id) {
    return res.status(400).json({ error: 'title, content y author_id son obligatorios' });
    }
    const newPost = await service.create({ title, content, author_id });
    res.status(201).json(newPost);
    } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const update = async (req, res) => {
    try {
    const updated = await service.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Post no encontrado' });
    res.status(200).json(updated);
    } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const remove = async (req, res) => {
    try {
    const deleted = await service.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Post no encontrado' });
    res.status(204).send();
    } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = { getAll, getById, getByAuthorId, create, update, remove };