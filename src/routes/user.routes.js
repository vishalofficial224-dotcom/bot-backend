const express = require('express');
const {sendMessage, receiveMessage} = require('../controller/user.controller.js')

const router = express.Router();

router.post('/message', sendMessage)
router.get('/receive', receiveMessage)

module.exports = router;
