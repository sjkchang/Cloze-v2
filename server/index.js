const express = require('express');
const app = express();
const port = 5000;

const userRoutes = require('./routes/user-routes.js');
const todoRoutes = require('./routes/todo-routes.js');
const journalRoutes = require('./routes/journal-routes.js');
const challengeRoutes = require('./routes/challenge-routes.js');

app.use('/user', userRoutes);
app.use('/to-do', todoRoutes);
app.use('/journal', journalRoutes);
app.use('/challenge', challengeRoutes);

app.listen(port, () => console.log(`Cloze V2 is running at http://localhost:${port}`));