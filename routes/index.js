const express = require('express');

const router = express.Router();
const recipeRouter = require('./recipe');

/* GET home page. */
router.use('/', recipeRouter);

module.exports = router;
