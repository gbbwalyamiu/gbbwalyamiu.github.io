const express = require('express');
const path = require('path');
const userController = require('../controllers/mainController');

const router = express.Router();
const app = express();

app.use(express.json());

router.get('/cart/user/:userid', userController.getUserCart);

router.post('/cart', userController.addItemtoCart);

router.get('/:username/:password', userController.verifyUser);

module.exports = router;