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