const User = require("../models/User")

module.exports.renderSignUp = (req, res) => {
    res.render('pages/users/signup', { currentPage: 'signup' })
}

module.exports.submitUser = async (req, res) => {
    req.body.username = req.body.email
    if (req.body.optIn === 'on') {
        req.body.optIn = true
    } else {
        req.body.optIn = false
    }
    try {
        const { name, email, address,  password, username, optIn } = req.body;
        const newUser = new User({ username, address, email, name, optIn });
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