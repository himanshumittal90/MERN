const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router
    .get('/', productController.getAllProducts)
    .post('/', productController.createProduct)
    .get('/:id', productController.getProductDetail)
    .patch('/:id', productController.updateProduct)
    .put('/:id', productController.replaceProduct)
    .delete('/:id', productController.deleteProduct);

exports.router = router;