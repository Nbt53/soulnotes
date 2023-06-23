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

module.exports.renderAbout = (req, res) => {
    res.render('pages/about', { currentPage: 'about' })
}