const express = require('express');
const mongoose = require('mongoose');
const createServer = require('./server.js')
require('dotenv').config();

const uri = process.env.ATLAS_URI;
const port = process.env.PORT || 5000;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

//Connect to MongoDB Atlas database
mongoose.connect(uri, connectionParams)
    .then(() => {
        console.log('Connected to database ')
        const app = createServer();
        app.listen(port, () => {
            console.log(`Cloze V2 is running at http://localhost:${port}`);
        })
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
