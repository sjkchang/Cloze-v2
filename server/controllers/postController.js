const Post = require('../models/postModel');
const User = require('../models/userModel');

exports.list_all_of_posts = (req, res) => {
    type = req.params.type;
    Post.find((err, posts) => {
        if(err){ res.status(400).json('Error: ' + err); }
        res.json(posts);
    });
}

exports.list_all_of_type = (req, res) => {
    type = req.params.type;
    Post.find({type: type}, (err, posts) => {
        if(err){ res.status(400).json('Error: ' + err); }
        res.json(posts);
    });
}

exports.get_post_by_id = (req, res) => {
    type = req.params.type;
    Post.findOne({_id: req.body.id}, (err, post) => {
        if(err){ res.status(400).json('Error: ' + err); }
        res.json(post)
    });
}

exports.get_all_user_posts_of_type = (req, res) => {
    type = req.params.type;
    userId = req.params.userId;
    Post.find({user: userId}, (err, posts) => {
        if(err){ res.status(400).json('Error: ' + err); }
        res.json(posts)
    });
}

exports.add_post = (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        type: req.params.type,
        user: req.body.userId
    });
    User.findOne({_id: req.body.userId}, (err, user) => {
        if(err){ res.status(400).json('Error: ' + error); }
        newPost.save((err, post) => {
            if(err){ res.status(400).json('Error: ' + error); }
            user.posts.push(post);
            user.save();
            res.json(post.type + ': ' + post.title + ' added!');
        });
    });
}

exports.delete_post = (req, res) => {
    const id = req.body.id;
    Post.findOneAndDelete({_id: id}, (err) => {
        if(err){ res.status(400).json('Error: ' + error); }
        res.json('Post ' + id + ' deleted!');
    });
}

exports.edit_post = (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const id = req.body.id;

    Post.findOneAndUpdate({_id: id}, {$set: {title: title, content: content}}, (err, post) => {
        if(err){ res.status(400).json('Error: ' + error); }
        res.json(post.type + ': '  + title + ' has been updated to ' + post.title);
    });
}
