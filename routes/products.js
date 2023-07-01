const express = require('express');
const catchAsync = require('../utils/catchAsync')
const { renderProduct, renderProductNew, submitProduct, renderShowProducts, destroyProduct, renderEditProduct, updateProduct } = require('../controllers/products');
const router = express.Router();


router.route('/')
    .get(catchAsync(renderProduct))
    .post(catchAsync(submitProduct))

router.route('/new')
    .get(renderProductNew)

router.route('/:id')
    .get(catchAsync(renderShowProducts))
    .delete(catchAsync(destroyProduct))

router.route('/edit/:id')
    .get(catchAsync(renderEditProduct))
    .patch(catchAsync(updateProduct))

module.exports = router; 