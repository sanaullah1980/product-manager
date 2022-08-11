import { Button, TextField, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import ProductList from './ProductList';



const AddProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [products, setProducts] = useState([]);

    const style = {
        marginBottom: '1rem'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        }
        try {
            const res = await axios.post('http://localhost:5000/api/product',{
                ...newProduct
            });
            setTitle("");
            setPrice("");
            setDescription("");
            getProducts();
        } catch (error) {
            console.log(error);
        }      
    }

    const getProducts = async () =>{
        try {
            const res = await axios.get('http://localhost:5000/api/product');
            const resData = await res.data;
            setProducts(resData.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getProducts();
    },[])


  return (
    <div>
        <Typography variant='h4' sx={{mb: '1rem'}}>Product Manager</Typography>
        <form  className='product__form' onSubmit={ e => handleSubmit(e)}>       
            <TextField
                sx={style}
                label= "Title"
                variant='filled'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                required
            />
            <TextField 
                sx={style}
                label= "Price"
                variant='filled'
                value={price}
                onChange={(e)=> setPrice(e.target.value)}
                required
            />
            <TextField 
                sx={style}
                label= "Description"
                variant='filled'
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                required
            />

            <Button variant='contained' type='submit'>Create</Button>
        </form>
        <ProductList products={products}/>
    </div>
  )
}

export default AddProductForm;