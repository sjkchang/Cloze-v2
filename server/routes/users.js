const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');

//Get response of all users
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('Error: ' + error))
});

//Add a new user
router.post('/add', (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    const password_hash = bcrypt.hashSync(password, 10);
    const newUser = new User({username: username, name: name, password_hash: password_hash});

    newUser.save()
        .then(() => res.json('User ' + username + ' added!'))
        .catch(error => {
            res.status(400).json('Error: ' + error);
            console.log(error);
        })
});

//Get JSON data on specific user based off of username
router.get('/:username', (req, res) => {
    username = req.params.username;
    User.find({ username: {$eq: username} })
        .then(user => res.json(user))
        .catch(error => res.status(400).json('Error: ' + error));
});



//export this router to use in our index.js
module.exports = router;