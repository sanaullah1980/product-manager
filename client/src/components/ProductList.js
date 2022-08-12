import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({products, filterProduct}) => {
    
    const deleteItem = (id) =>{
        console.log(id);
        const test = async () => {
            try {
                await axios.delete(`http://localhost:5000/api/product/${id}`)   
                filterProduct(id);
            } catch (error) {
                console.log(error);
            }
        }
        test();
    } 

const test = () => {
    const testData = products && products.map((product)=>
            <div className='list__item'>
                <span 
                    className='item' 
                    key={product._id}
                >
                    <Link to={`/product/${product._id}`}>
                        {product.title}
                    </Link>
                </span>
                <div>
                    <button onClick={()=> deleteItem(product._id)}>Delete</button>     
                </div>
            </div>
                
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