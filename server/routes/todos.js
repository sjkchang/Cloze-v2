const express = require('express');
const router = express.Router();

let Task = require('../models/taskModel');
let User = require('../models/userModel');


router.get('/', (req, res) => res.send('GET route on todo routes.'));

router.post('/', (req, res) => res.send('POST route on todo routes.'));

//export this router to use in our index.js
module.exports = router;