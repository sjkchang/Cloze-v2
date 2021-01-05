const { Error } = require('mongoose');
const Post = require('../models/postModel');
const User = require('../models/userModel');

exports.list_all_of_type = (req, res) => {
    type = req.params.type;
    Post.find({type: type})
        .then(posts => res.json(posts))
        .catch(error => res.status(400).json('Error: ' + error));
}

exports.get_post_by_id = (req, res) => {
    type = req.params.type;
    Post.findOne({_id: req.body.id})
        .then(post => res.json(post))
        .catch(error => res.status(400).json('Error: ' + error));
}

exports.get_all_user_posts_of_type = (req, res) => {
    type = req.params.type;
    userId = req.params.userId;
    Post.find({user: userId})
        .then(posts => res.json(posts))
        .catch(error => res.status(400).json('Error: ' + error));
}

exports.add_post = (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        type: req.params.type,
        user: req.body.userId
    });
    User.findOne({_id: req.body.userId})
        .then(user => {
            if(user){
                newPost.save()
                    .then(() => {
                        user.posts.push(newPost);
                        user.save();
                        res.json(req.params.type + ': ' + req.body.title + ' added!');
                    }).catch((error) =>{
                        res.status(400).json('Error: ' + error);
                    });
            }
        }).catch((error) => {
            res.status(400).json('Error: ' + error)
        })
}