let authors = [ 
    {
        id: 1,
        name: 'Jonathan Heredia',
        email: 'jonahere@gmail.com',
        bio: 'Desarrollador full-stack apasionado por node.js'
    },
    {
        id: 2,
        name: 'Natalia Rubio',
        email: 'natisrub@gmail.com',
        bio: 'Ecritora tecnica epecializada en base de datos'
    },
    {
        id: 3,
        name: 'Alejo Fernandez',
        email: 'alejofer@example.com',
        bio: 'Ingeniero de software con foco en APIs REST'
    }
];    

const getAll = () => authors;

const getById = (id) => authors.find(a => a.id === parseInt(id));

const create = (data) => {
    const newAuthor = { id: authors.length + 1, ...data };
    authors.push(newAuthor);
    return newAuthor;
};

const update = (id, data) => {
    const index = authors.findIndex(a => a.id === parseInt(id));
    if (index === -1) return null;
    authors[index] = { ...authors[index], ...data };
    return authors[index];
};

const remove = (id) => {
    const index = authors.findIndex(a => a.id === parseInt(id));
    if (index === -1) return null;
    const deleted = authors[index];
    authors.splice(index, 1);
    return deleted;
};

module.exports = { getAll, getById, create, update, remove };