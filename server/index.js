const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(uri,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(express.json());


const userRoutes = require('./routes/users.js');
const todoRoutes = require('./routes/todos.js');
const journalRoutes = require('./routes/journals.js');
const challengeRoutes = require('./routes/challenges.js');


app.use('/user', userRoutes);
app.use('/to-do', todoRoutes);
app.use('/journal', journalRoutes);
app.use('/challenge', challengeRoutes);


app.listen(port, () => console.log(`Cloze V2 is running at http://localhost:${port}`));