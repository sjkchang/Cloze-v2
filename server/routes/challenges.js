const router = require('express').Router();
const challenge_controller = require('../controllers/challengesController');


//Get list of all tasks
router.get('/', challenge_controller.list_all_challenges);

router.route('/:title')
    .get(challenge_controller.get_challenge)
    .post(challenge_controller.add_challenge)
    .put(challenge_controller.edit_challenge)
    .delete(challenge_controller.delete_challenge)

//export this router to use in our index.js
module.exports = router;