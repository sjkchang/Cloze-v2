const User = require('../models/userModel')

exports.list_all_users = (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('Error: ' + error))
}

exports.get_user = (req, res) => {
    const username = req.params.username;
    User.find({ username: username })
        .then(user => res.json(user))
        .catch(error => res.status(400).json('Error: ' + error));
}

exports.register_new_user = (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const newUser = new User({username: username, name: name});

    newUser.save()
        .then(() => res.json('User ' + username + ' added!'))
        .catch(error => {
            res.status(400).json('Error: ' + error);
            console.log(error);
        })
}

exports.edit_user = (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const old_username = req.body.old_username;

    User.findOneAndUpdate({username: old_username}, {$set: {username: username, name: name}})
        .then((user) => {
            if(user) {
                res.json('User' + old_username + ' has been updated to ' + username);
            } else {
                throw error = new Error('User does not Exist');
            }
        }).catch(error => {
            res.status(400).json('Error: ' + error);
            console.log(error);
        });
    
}

exports.delete_user = (req, res) => {
    const username = req.params.username;
    User.findOneAndDelete({username: username})
        .then(() => res.json('User ' + username + ' deleted!'))
        .catch(error => {
            res.status(400).json('Error: ' + error);
            console.log(error);
        })
}