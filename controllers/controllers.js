module.exports.renderHome = (req, res) => {
    res.render('pages/home', { currentPage: 'home' })
}

module.exports.renderContact = (req, res) => {
    res.render('pages/contact', { currentPage: 'contact' })
}

module.exports.submitContact = (req, res) => {
    const response = req.body
    res.send(response)
}

/////products

module.exports.renderProduct = (req, res) => {
    res.render('pages/products/show', { currentPage: 'products' })
}

module.exports.renderProductNew =(req, res) => {
    res.render('pages/products/new', {currentPage: 'products'})
}

module.exports.submitProduct = (req, res) => {
    const response = req.body
    res.send(response)
}