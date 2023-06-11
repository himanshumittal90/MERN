const fs = require("fs"); 
const model = require("../model/product");
const Product = model.Product;
exports.getAllProducts = async (req,res)=> {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    } catch(err) {
        res.status(400).json(err);
    }
    
}
exports.getProductDetail =  async (req,res)=> {
    const id = req.params.id;
    try {
        const singleProd = await Product.findOne(id);
        res.status(200).json(singleProd);
    } catch(err) {
        res.status(400).json(err);
    }
}

exports.replaceProduct = async (req,res)=> {
    const id = req.params.id;
    try {
        const replacedProduct = await Product.findOneAndReplace({_id: id}, req.body);
        res.status(200).json(replacedProduct)
    } catch(err) {
        res.status(400).json(err);
    }
}
exports.createProduct = async (req,res)=> {
    const product = new Product(req.body);
    try {
        await product.save();
        res.status(201).json({'message': 'successfully done'})
    }
    catch(err) {
        res.status(400).json(err)
    }
    
}

exports.updateProduct = async (req,res)=> {
    const id = req.params.id;
    try {
        const response = await Product.findOneAndUpdate({_id: id}, req.body, {new: true})
        res.status(200).json(response)
    } catch(err) {
        res.status(400).json({err})

    }
    res.status(200).json();
}

exports.deleteProduct = async (req,res)=> {
    const id = req.params.id;
    try{
        const resp = await Product.findOneAndDelete({_id: id});
        res.status(200).json(resp);
    } catch(err) {
        resp.status(400).json(err)
    }
}