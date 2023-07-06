const { productSchema } = require("../models/joiSchemas")

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

module.exports.validateProduct = async(req, res, next) =>{
    const { error } = productSchema.validate(req.body);

    if (error) {
      const validationErrors = error.details.map(detail => detail.message);
      const err = new ExpressError(validationErrors.join(', '), 400);
      return next(err);
    }
  
    next();
}