const express = require('express');
const { renderProduct, renderProductNew, submitProduct, renderShowProducts, destroyProduct, renderEditProduct, updateProduct } = require('../controllers/products');
const router = express.Router();


router.route('/')
    .get(renderProduct)
    .post(submitProduct)

router.route('/new')
    .get(renderProductNew)

router.route('/:id')
    .get(renderShowProducts)
    .delete(destroyProduct)

router.route('/edit/:id')
    .get(renderEditProduct)
    .patch(updateProduct)

module.exports = router; 