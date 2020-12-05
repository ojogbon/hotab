const express = require('express');

const licenseController = require('./../controller/licenseController');
const router = express.Router();

router.route('/license').post(licenseController.createLicense);

module.exports = router;