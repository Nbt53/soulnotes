const { productSchema } = require("../models/joiSchemas")
const ExpressError = require('../utils/ExpressError')

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.redirect('/user/login')
    }
    next()
}

module.exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.admin === true) {
        next()
    } else {
        res.redirect('/')
    }

}

module.exports.validateProduct = async (req, res, next) => {
    console.log(productSchema.validate(req.body))
    const { error } = productSchema.validate(req.body);

    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        console.log('error')
        next(new ExpressError(msg, 400))
    } else {
        console.log('no error')
        next();
    }


}