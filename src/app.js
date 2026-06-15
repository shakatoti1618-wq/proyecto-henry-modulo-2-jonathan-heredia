const express = require('express');
const app = express();

app.use(express.json());

const authorsRouter = require('./routes/authors.routes');
const postsRouter = require('./routes/posts.routes');

app.use('/authors', authorsRouter);
app.use('/posts', postsRouter);

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;