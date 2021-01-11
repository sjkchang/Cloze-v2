const User = require('../models/userModel')

exports.list_all_users = (req, res) => {
    User.find((err, users) => {
        if(err){ res.status(400).json('Error: ' + error)}
        res.json(users);
    });
}

exports.get_user = (req, res) => {
    const username = req.params.username;
    User.find({username: username}, (err, user) => {
        if (err) { res.status(400).json('Error: ' + error) }
        res.json(user);
    });
}

exports.register_new_user = (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const newUser = User.create({username: username, name: name}, (err, user) => {
        if(err) { res.status(400).json('Error: ' + err); }
        res.json(user);
    });
}

exports.edit_user = (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const old_username = req.body.old_username;

    User.findOneAndUpdate({username: old_username}, {$set: {username: username, name: name}}, (err, user) => {
        if(err){res.status(400).json('Error: ' + error);}
        res.json('User ' + user.username + ' has been updated to ' + username);
    })
}

exports.delete_user = (req, res) => {
    const username = req.params.username;
    User.findOneAndDelete({username: username}, (err, user) => {
        if(err){
            res.status(400).json('Error: ' + err);
        }
        res.json('User ' + username + ' deleted!');
    });
}