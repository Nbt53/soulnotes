const User = require("../models/User")

module.exports.renderSignUp = (req, res) => {
    res.render('pages/users/signup', { currentPage: 'signup' })
}

module.exports.submitUser = async (req, res) => {
    req.body.username = req.body.email
    if (req.body.admin === 'on') {
        req.body.admin = true
    } else {
        req.body.admin = false
    }
    try {
        const { name, email, password, username, admin } = req.body;
        const newUser = new User({ username, email, name, admin });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            res.redirect('/')

        })

    } catch (e) {
        console.log(e)
        res.redirect('/user/signup')
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('pages/users/login', { currentPage: 'login' })
}

module.exports.login = (req, res) => {
    res.redirect('/')
}

module.exports.logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
}