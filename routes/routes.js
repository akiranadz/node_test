const express = require('express');
const router = express.Router();
const controllers = require('./../contorllers/controllers');

router.get('/say-something', controllers.saySomething);

module.exports = router;