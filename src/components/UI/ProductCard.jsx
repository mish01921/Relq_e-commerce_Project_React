import React from 'react'
import productImg from "../../assets/images/SR300,300.png"
import { motion } from "framer-motion"
import "../../styles/product_curd.css"
import { Col } from "reactstrap"
import { Link } from 'react-router-dom'
function ProductCard() {
  return (


    <Col lg="2" md="4" >
      <div className="product_item">
        <div className="product_img">
          <Link to="shop/id" >
            <motion.img whileHover={{ scale: 1.1 }} src={productImg} alt="This is a Laptop image" />
          </Link>

        </div>
        <div className=" p-2 product_info">
          <h3 className="product_name"><Link to="/shop/id">Best Laptop</Link></h3>
          <span>Laptop</span>
        </div>
        <div className="product_card-button d-flex align-items-center justify-content-between p-2">
          <span className="price">2200$</span>
          <motion.span whileTap={{ scale: 1.2 }}><i className="ri-add-circle-fill"></i></motion.span>
        </div>
      </div>

    </Col>
  )
}

export default ProductCard;