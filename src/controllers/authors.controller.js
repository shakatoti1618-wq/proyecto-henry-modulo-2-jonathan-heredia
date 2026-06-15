const service = require('../services/authors.services');

const getAll = async (req, res) => {
    try {
    const authors = await service.getAll();
    res.status(200).json(authors);
    } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const getById = async (req, res) => {
    try {
    const author = await service.getById(req.params.id);
    if (!author) return res.status(404).json({ error: 'Author no encontrado' });
    res.status(200).json(author);
    } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const create = async (req, res) => {
    try {
    const { name, email, bio } = req.body;
    if (!name || !email) {
    return res.status(400).json({ error: 'name y email son obligatorios' });
    }
    const newAuthor = await service.create({ name, email, bio });
    res.status(201).json(newAuthor);
    } catch (error) {
    if (error.code === '23505') {
    return res.status(400).json({ error: 'El email ya está registrado' });
    }
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const update = async (req, res) => {
    try {
    const updated = await service.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Author no encontrado' });
    res.status(200).json(updated);
    } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const remove = async (req, res) => {
    try {
    const deleted = await service.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Author no encontrado' });
    res.status(204).send();
    } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = { getAll, getById, create, update, remove };

