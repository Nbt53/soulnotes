const express = require('express');
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const { renderSignUp, submitUser, renderLogin, login, logout } = require('../controllers/user');
const { isLoggedIn } = require('../utils/middleware');
const router = express.Router();

router.route('/')
    .post(submitUser)

router.route('/signup')
    .get(renderSignUp)

router.route('/login')
    .get(renderLogin)

    .post(passport.authenticate('local', {
        //failureFlash: true,
        failureRedirect: '/user/login',
        keepSessionInfo: true
    }), login)

router.get('/logout', isLoggedIn, logout)

module.exports = router; 