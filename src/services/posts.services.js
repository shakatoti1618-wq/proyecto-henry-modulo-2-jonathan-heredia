let posts = [
    {
        id: 1,
        title: 'Introducción a Node.js',
        content: 'Node.js es un runtime de JavaScript...',
        author_id: 1,
        published: true
},
    {
        id: 2,
        title: 'PostgreSQL vs MySQL',
        content: 'Ambas bases de datos tienen ventajas...',
        author_id: 2,
        published: true
},
    {
        id: 3,
        title: 'APIs RESTful',
        content: 'REST es un estilo arquitectónico...',
        author_id: 1,
        published: true
},
    {
        id: 4,
        title: 'Manejo de errores en Express',
        content: 'El manejo apropiado de errores...',
        author_id: 3,
        published: false
},
    {
        id: 5,
        title: 'Async/Await explicado',
        content: 'Las promesas simplifican el código asíncrono...',
        author_id: 1,
        published: false
    }
];

const getAll = () => posts;

const getById = (id) => posts.find(p => p.id === parseInt(id));

const getByAuthorId = (authorId) => posts.filter(p => p.author_id === parseInt(authorId));

const create = (data) => {
    const newPost = { id: posts.length + 1, published: false, ...data };
    posts.push(newPost);
    return newPost;
};

const update = (id, data) => {
    const index = posts.findIndex(p => p.id === parseInt(id));
    if (index === -1) return null;
    posts[index] = { ...posts[index], ...data };
    return posts[index];
};

const remove = (id) => {
    const index = posts.findIndex(p => p.id === parseInt(id));
    if (index === -1) return null;
    const deleted = posts[index];
    posts.splice(index, 1);
    return deleted;
};

module.exports = { getAll, getById, getByAuthorId, create, update, remove };