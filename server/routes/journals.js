const router = require('express').Router();
const journal_controller = require('../controllers/journalController');


//Get response of all users
router.get('/', journal_controller.list_all_users);

router.route('/:title')
    .get(journal_controller.get_user)
    .post(journal_controller.register_new_user)
    .put(journal_controller.edit_user)
    .delete(journal_controller.delete_user);

//export this router to use in our index.js
module.exports = router;