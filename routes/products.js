const express = require('express');
const catchAsync = require('../utils/catchAsync')
const { renderProduct, renderProductNew, submitProduct, renderShowProducts, destroyProduct, renderEditProduct, updateProduct } = require('../controllers/products');
const { isLoggedIn, isAdmin } = require('../utils/middleware');
const router = express.Router();


router.route('/')
    .get(catchAsync(renderProduct))
    .post(isAdmin, catchAsync(submitProduct))

router.route('/new')
    .get(isAdmin, renderProductNew)

router.route('/:id')
    .get(catchAsync(renderShowProducts))
    .delete(isAdmin, catchAsync(destroyProduct))

router.route('/edit/:id')
    .get(isAdmin, catchAsync(renderEditProduct))
    .patch(isAdmin, catchAsync(updateProduct))

module.exports = router; 