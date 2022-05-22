const express = require('express');

const router = express.Router();
// controller
const recipeController = require('../controllers/recipeController');

router.get('/', recipeController.homepage);

module.exports = router;
