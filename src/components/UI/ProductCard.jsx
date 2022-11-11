import React from 'react'
import { motion } from "framer-motion"
import "../../styles/product_curd.css"
import { Col } from "reactstrap"
import { Link } from 'react-router-dom'
function ProductCard({ item }) {
  return (


    <Col lg="2" md="4" >
      <div className="product_item">
        <div className="product_img">

          <motion.img whileHover={{ scale: 1.1 }} src={item.imgUrl} alt="This is a Laptop image" />


        </div>
        <div className=" p-2 product_info">
          <h3 className="product_name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
          <span>{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }}><i className="ri-add-circle-fill"></i></motion.span>
        </div>
      </div>

    </Col>
  )
}

export default ProductCard;