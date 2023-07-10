const Product = require('../models/Product');

module.exports.renderProduct = async (req, res) => {

    const products = await Product.find({});
    res.render('pages/products/show', { currentPage: 'products', products });
}

module.exports.renderProductNew = (req, res) => {
    res.render('pages/products/new', { currentPage: 'products' });
}

module.exports.submitProduct = async (req, res) => {
    const { name, image, price, qty } = req.body;
    const product = await new Product({ name, image, price, qty });
    product.save();
    console.log('product saved')
    res.redirect('/products');
}

module.exports.renderShowProducts = async (req, res) => {
    const productName = req.params.id
    const product = await Product.find({ name: productName });
    if (!product || product.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.render('pages/products/product', { currentPage: 'products', product });
}

module.exports.destroyProduct = async (req, res) => {
    const productName = req.params.id;
    const product = await Product.find({ name: productName });
    const result = await Product.findOneAndRemove({ name: productName });
    res.redirect('/products');

}

module.exports.renderEditProduct = async (req, res) => {
    const productName = req.params.id;
    const product = await Product.find({ name: productName });
    res.render('pages/products/edit', { currentPage: 'products', product });
}

module.exports.updateProduct = async (req, res) => {
    const updatedProduct = req.body;
    const productName = req.params.id;
    let product = await Product.find({ name: productName });
    product = product[0]._id;
    await Product.findByIdAndUpdate(product, updatedProduct);
    res.redirect('/products');
}
