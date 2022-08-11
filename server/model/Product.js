import mongoose from 'mongoose';

function getMoney(value) {
    //if (typeof value !== 'undefined') {
    
      // }
    return 'value';
  }

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        get: getMoney,
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