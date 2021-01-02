const router = require('express').Router();

//Import controllers
const user_controller = require('../controllers/userController');

//Get response of all users
router.get('/', user_controller.list_all_users);

//Add a new user
router.post('/add', user_controller.register_new_user);

//Get JSON data on specific user based off of username
router.get('/:username', user_controller.get_user);

//Edit User
router.put('/edit', user_controller.edit_user);

router.delete('/:username', user_controller.delete_user);
//export this router to use in our index.js
module.exports = router;