import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Productlist = () => {
  const [data, getData]= useState([]);
  const handleApiData= ()=>{
    axios.get("https://dummyjson.com/products")
    .then((response)=>{
      getData(response.data)
      console.log(response.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    handleApiData();
  }, []); 

  const navigate= useNavigate();
  const handleClick = ()=>{
    navigate('/new-product')
  }

  return (
    <div className='container'>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope="col">Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
        {data.products?.map((items)=>(
          <tr key={items.id}>
            <td>{items.id}</td>
            <td>{items.title}</td>
            <td>{items.price}</td>
            <td>{items.description}</td>
            <td>{items.discountPercentage}</td>
          </tr>
          ))}
        </tbody>
      </table>
      
      <div>
        <button className='btn btn-primary' onClick={handleClick}> Add new product</button>
      </div>
    </div>

  )
}

export default Productlist
