const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

//Connect to MongoDB Atlas database
mongoose.connect(uri,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.use(express.json());


const userRoutes = require('./routes/users.js');
const postRoutes = require('./routes/posts.js')


app.use('/user', userRoutes);
app.use('/posts', postRoutes);


app.listen(port, () => console.log(`Cloze V2 is running at http://localhost:${port}`));