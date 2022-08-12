import express from 'express';

import { getProducts, createNewProduct, getProductbyId, deleteProductbyId, updateProductbyId } from '../controllers/Product.js';

const router = express();

router
    .route('/')
    .get(getProducts)
    .post(createNewProduct);

    router
    .route('/:_id')
    .get(getProductbyId)
    .delete(deleteProductbyId)
    .put(updateProductbyId);

export default router;