const User = require('../models/userModel')
const bcrypt = require('bcrypt');

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
    const password = req.body.password;
    const password_hash = bcrypt.hashSync(password, 10);
    const newUser = new User({username: username, name: name, password_hash: password_hash});

    newUser.save()
        .then(() => res.json('User ' + username + ' added!'))
        .catch(error => {
            res.status(400).json('Error: ' + error);
            console.log(error);
        })
}

exports.edit_user = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const old_username = req.body.old_username;
    const old_password = req.params.old_password;
    const password_hash = bcrypt.hashSync(password, 10);
    
    //let query = User.findOne({username: old_username});
    //console.log(query);

    User.findOneAndUpdate({username: old_username}, {$set: {username: username}, password_hash: password_hash}, {multi: true, new: true})
        .then((user) => {
            if(user) {
                bcrypt.compare(old_password, user.toObject().password_hash, (err, result) =>{
                    if(!result){
                        throw error = new Error('Passwords do not match')
                    } else {
                        res.json('User' + old_username + ' has been updated to ' + username);
                    }
                }).catch(error => res.status(400).json('Error: ' + error));
            } else {
                throw error = new Error('User does not Exist');
            }
        }).catch(error => {
            res.status(400).json('Error: ' + error);
            console.log(error);
        });
}