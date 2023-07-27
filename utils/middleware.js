const { productSchema } = require("../models/joiSchemas")
const ExpressError = require('../utils/ExpressError')

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.redirect('/user/login');
    }
    next()
}

module.exports.isAdmin = async (req, res, next) => {
    if (req.isAuthenticated() && req.user.username === 'soulnotesboss@gmail.com') {
        next();
    } else {
        const returnTo = res.locals.prevURL || '/';
        res.redirect(returnTo);
    }

}

module.exports.validateProduct = async (req, res, next) => {
    const { error } = productSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        console.log('error')
        next(new ExpressError(msg, 400))
    } else {
        next();
    }


}