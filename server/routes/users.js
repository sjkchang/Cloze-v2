const router = require('express').Router();
const user_controller = require('../controllers/userController');


//Get response of all users
router.get('/', user_controller.list_all_users);

//Get JSON data on specific user based off of username
router.route('/:username')
    .get(user_controller.get_user)
    .post(user_controller.register_new_user)
    .put(user_controller.edit_user)
    .delete(user_controller.delete_user);

//export this router to use in our index.js
module.exports = router;