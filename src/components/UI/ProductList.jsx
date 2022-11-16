import React from 'react'
import ProductCard from './ProductCard'

function ProductList({data}) {
  return (
    <div className="copy_item">
    {data.map((item,index)=>(
      <ProductCard item={item} key={index} />
    ))}  
    </div>
  )
}

export default ProductList;