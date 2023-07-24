const express = require('express');
const { renderHome, renderContact, submitContact, renderAbout, renderPrivacy } = require('../controllers/controllers');
const router = express.Router();

router.route('/')
    .get(renderHome)

router.route('/contact')
    .get(renderContact)
    .post(submitContact)

router.route('/about')
    .get(renderAbout)

router.get('/privacy', renderPrivacy)

module.exports = router; 