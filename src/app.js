const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const swaggerDocument = YAML.load(path.join(__dirname, '../docs/openapi.yaml'));

app.use(cors());
app.use(express.json());


app.use('/api-docs', swaggerUi.serve, (req, res, next) => {
    const host = req.get('host');
    const protocol = host.includes('railway.app') ? 'https' : req.protocol;
    const dynamicDoc = {
    ...swaggerDocument,
    servers: [
    {
        url: `${protocol}://${host}`,
        description: 'Servidor actual'
    }
    ]
};
swaggerUi.setup(dynamicDoc)(req, res, next);
});

const authorsRouter = require('./routes/authors.routes');
const postsRouter = require('./routes/posts.routes');

app.use('/authors', authorsRouter);
app.use('/posts', postsRouter);

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;