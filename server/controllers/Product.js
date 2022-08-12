import Product from "../model/Product.js";
import Decimal128 from "mongoose";

//@desc         Get all products
//@route        GET /api/products 
export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}

//@desc         Get product by Id
//@route        GET /api/product/:id
export const getProductbyId = async (req, res, next) => {
    try {
        const products = await Product.findById(req.params._id);
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}

//@desc         Create new product
//@route        POST /api/product 
export const createNewProduct = async (req, res, next) => {
    try {
 
        const product = await Product.create(req.body);
        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}

//@desc         Delete product
//@route        delete /api/product/:id
export const deleteProductbyId = async (req, res, next) => {
   
    try { 
        const products = await Product.deleteOne({ _id: req.params._id });
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: "I dont know"
        });
    }
}

//@desc         update product
//@route        put /api/product/:id
export const updateProductbyId = async (req, res, next) => {
   console.log(req.params._id);
   console.log(req.body);
    try { 
        const products = await Product.findOneAndUpdate({ _id: req.params._id }, req.body, {new:true});
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: "I dont know"
        });
    }
}