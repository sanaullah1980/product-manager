import { Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';


const AddProductForm = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("This is Description");

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
        console.log(res);
        } catch (error) {
            console.log(error);
        }
        
        
    }


  return (
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
  )
}

export default AddProductForm;