import React from 'react'
import ProductCard from './ProductCard'

function ProductList({data}) {
  return (
    <div className="copy_item">
      {
        data.map((item,index) => (
          <ProductCard key={index} item={item}/>
        ))
      }
     
      
     
    </div>
  )
}

export default ProductList;