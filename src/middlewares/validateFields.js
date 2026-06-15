const validateAuthor = (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
    return res.status(400).json({ error: 'name y email son obligatorios' });
    }
    next();
};

const validatePost = (req, res, next) => {
    const { title, content, author_id } = req.body;
    if (!title || !content || !author_id) {
    return res.status(400).json({ error: 'title, content y author_id son obligatorios' });
    }
    next();
};

module.exports = { validateAuthor, validatePost };