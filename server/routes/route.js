import express from 'express';

import { getProducts, createNewProduct, getProductbyId } from '../controllers/Product.js';

const router = express();

router
    .route('/')
    .get(getProducts)
    .post(createNewProduct);

    router
    .route('/:_id')
    .get(getProductbyId)
    // .put(updateJokewithId)
    // .delete(deleteJokewithId);

export default router;