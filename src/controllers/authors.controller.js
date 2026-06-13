const service = require('../services/authors.services');

const getAll = (req, res) => {
    const authors = service.getAll();
    res.status(200).json(authors);
};

const getById = (req, res) => {
    const author = service.getById(req.params.id);
    if (!author) return res.status(404).json({ error: 'Author no encontrado' });
    res.status(200).json(author);
};

const create = (req, res) => {
    const { name, email, bio } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'name y email son obligatorios' });
    }
    const newAuthor = service.create({ name, email, bio });
    res.status(201).json(newAuthor);
};

const update = (req, res) => {
    const updated = service.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Author no encontrado' });
    res.status(200).json(updated);
};

const remove = (req, res) => {
    const deleted = service.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Author no encontrado' });
    res.status(204).send();
};

module.exports = { getAll, getById, create, update, remove };

