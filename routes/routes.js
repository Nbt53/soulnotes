const express = require('express');
const { renderHome, renderContact, submitContact } = require('../controllers/controllers');
const router = express.Router();

router.route('/')
    .get(renderHome)
    
router.route('/contact')
    .get(renderContact)
    .post(submitContact)

module.exports = router; 