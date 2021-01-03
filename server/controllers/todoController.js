const Task = require('../models/taskModel');
const User = require('../models/userModel');

exports.list_all_tasks = (req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(error => res.status(400).json('Error: ' + error));
}

exports.list_all_users_tasks = (req, res) => {
    res.send('This route is not yet implemented')
}

exports.get_task = (req, res) => {
    res.send('This route is not yet implemented')
}

exports.add_task = (req, res) => {
    const newTask = new Task();
    newTask.title = req.body.title;
    newTask.description = req.body.description;
    newTask.date = req.body.date;
    newTask.user = req.body.userId;
    newTask.save()
        .then(() => {
            User.findOne({_id: req.body.userId}, (error, user) => {
                if(user) {
                    user.challenges.push(newTask);
                    user.save()
                    res.json('Task' + req.body.title + ' added!');
                }
            });
        })
        .catch((error) => {
            res.status(400).json('Error: ' + error);
        });
}

exports.edit_task = (req, res) => {
    res.send('This route is not yet implemented')
}

exports.delete_task = (req, res) => {
    res.send('This route is not yet implemented')
}