import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@mui/material';

const initialState={
  title: '',
  description: '',
  price: '',
  discountPercentage: ''
}
const Form = () => {

  const [formData, setFormData]= useState(initialState);
  const handleChange =(event)=>{
    event.preventDefault();
    const {name, value}= event.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]: value,
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);

    axios.post('https://dummyjson.com/products/add', formData)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  
  return (
    <div className='App'>
      <h1> Add new product</h1>
      <form className='container' onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label>Product Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter product name"
            name= "title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter product description"
            name= "description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control" 
            placeholder="Enter product price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />          
        </div>

        <div className="form-group">
          <label>Discount</label>
          <input
            type="text" 
            className="form-control" 
            placeholder="Enter product discount"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleChange}
          />
        </div>

        <Button variant="contained" type='submit'>Submit</Button>
      </form> 
      
    </div>
  )
}

export default Form
