import './App.css';
import React from 'react';
import { TextField} from '@mui/material';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className='app'>
      
      <Routes>
          <Route path='/' element={<AddProductForm />} />
          <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </div>

  );
}

export default App;
