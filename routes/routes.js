const express = require('express');
const { renderHome, renderContact, submitContact, renderAbout } = require('../controllers/controllers');
const router = express.Router();

router.route('/')
    .get(renderHome)
    
router.route('/contact')
    .get(renderContact)
    .post(submitContact)

    router.route('/about')
    .get(renderAbout)

module.exports = router; 