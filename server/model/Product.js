import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    description: {
        type: String,
        required: true
    }},
    {
        timestamps: true
    }
    );

const Product = mongoose.model('Product', productSchema);

export default Product;