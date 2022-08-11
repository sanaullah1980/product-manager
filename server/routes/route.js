import express from 'express';

import { getProducts, createNewProduct } from '../controllers/Product.js';

const router = express();

router
    .route('/')
    .get(getProducts)
    .post(createNewProduct);

export default router;