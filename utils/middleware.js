module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.redirect('/user/login')
    }
    next()
}

module.exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.admin === true) {
        next()
    }
    res.redirect('/')
}