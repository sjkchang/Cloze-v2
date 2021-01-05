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
    const newPost = new Post();
    newPost.title = req.body.title;
    newPost.content = req.body.content;
    newPost.type = req.params.type;
    newPost.user = req.body.userId;
    newPost.save()
        .then(() => {
            User.findOne({_id: req.body.userId}, (error, user) => {
                if(user) {
                    user.posts.push(newPost);
                    user.save();
                    res.json(req.params.type + ': ' + req.body.title + ' added!');
                }
            });
        })
        .catch((error) =>{
            res.status(400).json('Error: ' + error);
            //console.log(error);
        });
}