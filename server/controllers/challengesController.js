const Challenge = require('../models/challengeModel')
const User = require('../models/userModel')

exports.list_all_challenges = (req, res) => {
    Challenge.find()
        .then(challenges => res.json(challenges))
        .catch(error => res.status(400).json('Error: ' + error));
}

exports.list_all_users_challenges = (req, res) => {
    const title = req.body.title;
    Challenge.find({ title: title})
        .then(challenge => res.json(challenge))
        .catch(error => res.status(400).json('Error: ' +error));
}

exports.get_challenge = (req, res) => {
    res.send('This route is not yet implemented')
}

exports.add_challenge = (req, res) => {
    const newChallenge = new Challenge();
    newChallenge.title = req.body.title;
    newChallenge.content = req.body.content;
    newChallenge.user = req.body.userId;
    newChallenge.save()
        .then(() => {
            User.findOne({_id: req.body.userId}, (error, user) => {
                if(user) {
                    user.challenges.push(newChallenge);
                    user.save();
                    res.json('Challenge ' + req.body.title + ' added!');
                }
            });
        })
        .catch((error) =>{
            res.status(400).json('Error: ' + error);
            //console.log(error);
        });
}

exports.edit_challenge = (req, res) => {
    res.send('This route is not yet implemented')
}

exports.delete_challenge = (req, res) => {
    res.send('This route is not yet implemented')
}