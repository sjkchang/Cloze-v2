const router = require('express').Router();
const post_controller = require('../controllers/postController');


//Get list of all tasks
router.get('/:type/all', post_controller.list_all_of_type);
router.route('/:type')
    .get(post_controller.get_post_by_id)
    .post(post_controller.add_post)
    //.put(post_controller.edit_challenge)
    //.delete(post_controller.delete_challenge)

router.get('/:type/:userId', post_controller.get_all_user_posts_of_type)

    

//export this router to use in our index.js
module.exports = router;