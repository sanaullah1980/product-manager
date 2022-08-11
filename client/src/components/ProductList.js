import { display } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({products}) => {

const test = () => {
    const testData = products && products.map((product)=>
                <span 
                    className='item' 
                    key={product._id}
                >
                    <Link to={`/product/${product._id}`}>
                        {product.title}
                    </Link>
                </span>  
            )
        return testData;
}



  return (
    <div className='product__list'>
        {
            test()
        }

    </div>
  )
}

export default ProductList