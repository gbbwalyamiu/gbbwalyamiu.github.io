const express = require('express');
const productController = require('../controllers/mainController');
var app = express();
const path = require('path');
app.set('env','development');

const router = express.Router();

app.use(express.static(path.join(__dirname, 'client')));
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended:true }));

router.get('/products/', productController.getAllProducts);

module.exports = router;