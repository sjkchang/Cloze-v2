const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('GET route on user routes.'));

router.get('/:id([0-9])', (req, res) => res.send('The user ID is ' + req.params.id));
router.get('/:username(^[a-zA-Z0-9äöüÄÖÜ]*$)', (req, res) => res.send('The username is ' + req.params.username));
router.get('/:email', (req, res) => res.send('The email is ' + req.params.email))


router.post('/:username(^[a-zA-Z0-9äöüÄÖÜ]*$)/:email()', (req, res) => res.send('POST, Username:' + req.params.username + 'Email: ' + req.params.email));

router.put('/:id([0-9])/:username(^[a-zA-Z0-9äöüÄÖÜ]*$)/:email()', (req, res) => res.send('POST route on user routes.'));


//export this router to use in our index.js
module.exports = router;