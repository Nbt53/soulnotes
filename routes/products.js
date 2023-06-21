const express = require('express');
const { renderProduct, renderProductNew, submitProduct } = require('../controllers/controllers');
const router = express.Router();

router.route('/')
    .get(renderProduct)
    .post(submitProduct)

router.route('/new')
    .get(renderProductNew)    


module.exports = router; 