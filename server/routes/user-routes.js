const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('GET route on user routes.'));

router.post('/', (req, res) => res.send('POST route on user routes.'));

//export this router to use in our index.js
module.exports = router;