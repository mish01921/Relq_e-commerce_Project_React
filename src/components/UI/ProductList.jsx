import React from 'react'
import { Fragment } from 'react';
import ProductCard from './ProductCard'

function ProductList({ data }) {
  return <Fragment>
  
     {data.map((item,index) => (
      <ProductCard item={item} key={index}/>
     ))} 
     </Fragment>
    
  
     }
export default ProductList;