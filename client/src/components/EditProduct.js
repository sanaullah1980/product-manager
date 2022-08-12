import React, {useState, useEffect} from 'react'
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'


const EditProduct = () => {

    const {id} = useParams();
    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    //const [product, setProduct] = useState([]);
    const [errors, setErrors] = useState();

    const style = {
        marginBottom: '1rem'
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.put('http://localhost:5000/api/product/' + id, {
                title,    
                price,
                description
            });
            
            navigate('/');

        } catch (error) {
            console.log(error);
        }
       
    }

    useEffect(()=>{
        console.log(id);
        const getProductbyId = async () =>{
            try {
                const res = await axios.get(`http://localhost:5000/api/product/${id}`);
                const resData = await res.data;
                setTitle(resData.data.title)
                setPrice(resData.data.price['$numberDecimal'])
                setDescription(resData.data.description)
            } catch (error) {
               console.log(error); 
            }
        }
        getProductbyId();
    }, []);

  return (
    <div>
        <Typography variant='h4' sx={{mb: '1rem'}}>Update Product</Typography>
        <form  className='product__form' onSubmit={ e => handleSubmit(e)}>       
                <TextField
                    sx={style}
                    label= "Title"
                    variant='filled'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    //helperText={errors && errors.title && errors.title.message}
                    //error={errors && errors.title}
                    
                />
                {/* {errors && errors.title && <span>{errors.title.message}</span>} */}
                <TextField 
                    sx={style}
                    label= "Price"
                    variant='filled'
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)}
                // helperText={errors && errors.price && errors.price.message}
                // error={errors && errors.price}
                

                />
                <TextField 
                    sx={style}
                    label= "Description"
                    variant='filled'
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    //helperText={errors && errors.description && errors.description.message}
                    //error={errors && errors.title}
                    
            
                />

                <Button variant='contained' type='submit'>Update</Button>
            </form>
    </div>
  )
}

export default EditProduct