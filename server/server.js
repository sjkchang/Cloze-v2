const express = require('express');
const userRoutes = require('./routes/users.js');
const postRoutes = require('./routes/posts.js')

function createServer() {
    const app = express();
    app.use(express.json());
    const userRoutes = require('./routes/users.js');
    const postRoutes = require('./routes/posts.js')
    
    app.use('/user', userRoutes);
    app.use('/posts', postRoutes);

    return app;
}

module.exports = createServer