const express = require('express');
const productcontroller = require("./../controller/productController");

const router = express.Router();

router.route('/products').post(productcontroller.CreateProduct).get(productcontroller.getAllProduct);

router.route('/products/:id').get(productcontroller.getOneProduct);
module.exports = router;