import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct ]= useState({})
    const [price, setPrice] = useState("");

    const navigate = useNavigate();

useEffect(()=>{
    const getProductbyId = async () =>{
        try {
            const res = await axios.get(`http://localhost:5000/api/product/${id}`);
            const resData = await res.data;
            setProduct(resData.data)
            setPrice(resData.data.price['$numberDecimal'])
        } catch (error) {
           console.log(error); 
        }
    }

    getProductbyId();
}, [])

  return (
   
    <div className='product__list'>
         <Typography variant='h4' sx={{mb: '1rem'}}>Product Details</Typography>
         <Typography variant='h6' sx={{mb: '1rem'}}>{product.title}</Typography>
         <Typography  sx={{mb: '1rem'}}>{price}</Typography>
         <Typography  variant='subtitle1' sx={{mb: '1rem'}}>{product.description}</Typography>
        
        <Button variant='contained' sx={{mt: '1rem'}} onClick={()=> navigate('/')}>Back to home</Button>
    </div>
  )
}

export default ProductDetails