const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const userRoutes = require('./routes/users.js');
const todoRoutes = require('./routes/todos.js');
const journalRoutes = require('./routes/journals.js');
const challengeRoutes = require('./routes/challenges.js');



//app.use(cors);
app.use(express.json());

app.use('/user', userRoutes);
app.use('/to-do', todoRoutes);
app.use('/journal', journalRoutes);
app.use('/challenge', challengeRoutes);


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB database connection established"))


app.listen(port, () => console.log(`Cloze V2 is running at http://localhost:${port}`));