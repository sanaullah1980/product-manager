import { Button, TextField, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductList from './ProductList';



const AddProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState();

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
            setErrors(error.response.data.error.errors);
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

    const filterProduct = (id) => {
        const newproductList = products.filter((product)=> {
            return product._id !== id
        })

        setProducts(newproductList);
    }
  return (
    <div>
        <Typography variant='h4' sx={{mb: '1rem'}}>Product Manager</Typography>
        <form  className='product__form' onSubmit={ e => handleSubmit(e)}>       
            <TextField
                sx={style}
                label= "Title"
                variant='filled'
                value={title}
                helperText={errors && errors.title && errors.title.message}
                error={errors && errors.title}
                onChange={(e)=> setTitle(e.target.value)}
            />
            {/* {errors && errors.title && <span>{errors.title.message}</span>} */}
            <TextField 
                sx={style}
                label= "Price"
                variant='filled'
                value={price}
                helperText={errors && errors.price && errors.price.message}
                error={errors && errors.price}
                onChange={(e)=> setPrice(e.target.value)}

            />
            <TextField 
                sx={style}
                label= "Description"
                variant='filled'
                value={description}
                helperText={errors && errors.description && errors.description.message}
                error={errors && errors.title}
                onChange={(e)=> setDescription(e.target.value)}
           
            />

            <Button variant='contained' type='submit'>Create</Button>
        </form>
        <ProductList products={products} filterProduct={filterProduct}/>
    </div>
  )
}

export default AddProductForm;