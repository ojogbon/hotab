const express = require('express');

const userController = require('./../controller/userController');

const router = express.Router();

router.route('/signup').post(userController.createNewUser);

module.exports = router;