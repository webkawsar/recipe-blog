const express = require('express');

const router = express.Router();
// controller
const recipeController = require('../controllers/recipeController');

// routes
router.get('/', recipeController.homepage);
router.get('/home', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.getSingle);

module.exports = router;
