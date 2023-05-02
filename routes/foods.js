const express = require('express');
const router = express.Router();
const {postFoodItem, getFoodItems, deleteFoodItem, updateFoodItem} = require('../controllers/foodItemController')
router.get('/', getFoodItems)
router.post('/add', postFoodItem);
router.delete('/', deleteFoodItem);
router.put('/', updateFoodItem);

module.exports = router;