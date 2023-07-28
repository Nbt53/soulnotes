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
        const { firstName, lastName, email, address, password, username, optIn } = req.body;
        const newUser = new User({ username, address, email, firstName, lastName, optIn });
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
    const returnTo = req.session.prevURL;
    console.log(returnTo)
    res.render('pages/users/login', { currentPage: 'login', returnTo })
}

module.exports.login = (req, res) => {
    res.redirect(req.body.returnTo);
}

module.exports.logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        const returnTo = res.locals.prevURL || '/';
        res.redirect(returnTo);
    });
}

module.exports.renderUserEdit = async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id)
    res.render('pages/users/edit', { currentPage: 'userEdit', user })
}

module.exports.updateUser = async (req, res) => {

    const updatedUser = req.body
    const user = await User.findOne({ username: updatedUser.email })
    await User.findByIdAndUpdate(user._id, updatedUser)
    res.redirect(`user/edit/${user._id}`)
}