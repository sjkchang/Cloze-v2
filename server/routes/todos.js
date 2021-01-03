const express = require('express').Router();
const todo_controller = require('../controllers/todoController');


//Get list of all tasks
router.get('/', todo_controller.list_all_tasks);

router.get('/:username', todo_controller.list_all_users_tasks);

router.route('/:task')
    .get(todo_controller.list_all_users_tasks)
    .post(todo_controller.add_task)
    .put(todo_controller.edit_task)
    .delete(todo_controller.delete_task);

//export this router to use in our index.js
module.exports = router;