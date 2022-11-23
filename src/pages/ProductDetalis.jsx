import React, { useState,useRef,useEffect } from 'react';
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/product-detalis.css";
import { motion } from 'framer-motion';
import ProductsList  from "../components/UI/ProductList";
import { useDispatch } from "react-redux"
import { cartActions } from "../redux/slices/cartSlice"
import { toast } from 'react-toastify';

function ProductDetalis() {

  const [tab, setTab] = useState("");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch()

  const [rating,setRating] = useState(null);
  const { id } = useParams();
  const product = products.find((item) => item.id === id)

  const { imgUrl, productName, price,category, avgRating, reviews, shortDesc, description } = product;

  const relatedProducts = products.filter(item => item.category === category)

  const submitHandler = (e) => {
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    const reviewObj = {
      author: reviewUserName,
      text: reviewUserMsg,
      rating,
    }
    console.log(reviewObj)
  }

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }))

    toast.success("Product added")
  }

  useEffect(() => {
    window.scrollTo(0,0);
  }, [product])
  return (
    <Helmet title={productName}>
       <CommonSection title={productName} /> 

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="4" className='mt-4'>
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg="6">
              <div className="product_detalis ">
                <h2>{productName}</h2>
                <div className="product_rating d-flex align-items-center gap-2 mb-2">
                  <div>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span >
                      <i className="ri-star-fill"></i>
                    </span>
                    <span >
                      <i className="ri-star-fill"></i>
                    </span>
                    <span >
                      <i className="ri-star-fill"></i>
                    </span>
                    <span >
                      <i className="ri-star-half-fill">
                      </i>
                    </span>
                  </div>
                  <p>(<span>{avgRating}</span>ratings)</p>
                </div>

                  <div className="d-flex  align-items-center gap-5">
                  <span className="product_price">${price}</span>
                  <span>Category:{category.toUpperCase()}</span>
                  </div>
                <p className="mt-3">{shortDesc}</p>

                <motion.button whileTap={{ scale: 1.1 }} className="buy_btn" onClick={addToCart}>Add to Cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab_wrapper d-flex align-atems-center gap-5">
                <h6 className={`${tab === "desc" ? "active_tab" : ""}`} onClick={() => setTab("desc")}>Description</h6>
                <h6 className={`${tab === "rev" ? "active_tab" : ""}`} onClick={() => setTab("rev")}>Reviews({reviews.length})</h6>
              </div>

              {
                tab === "desc" ? (
                  <div className="tab_content mt-4">
                    <p>{description}</p>
                  </div>) : (
                  <div className="product_review mt-5">
                    <div className="review_wrapper">
                      <ul>
                        {
                          reviews.map((item, index) => (
                            <li key={index} className="mb-4">
                              <h6>Jhon Doe</h6>
                              <span>{item.rating} ( rating)</span>
                              <p>{item.text}</p>
                            </li>
                          ))
                        }
                      </ul>

                      <div className="review_form">
                        <h4>Leave your feedback</h4>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form_group">
                            <input
                             type="text"
                              placeholder="Your Name"
                               ref={reviewUser}
                               required
                               />
                          </div>

                          <div className="form_group d-flex align-items-center gap-3">
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(1)}>1 <i className="ri-star-s-line"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(2)}>2 <i className="ri-star-s-line"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(3)}>3 <i className="ri-star-s-line"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(4)}>4 <i className="ri-star-s-line"></i></motion.span>
                            <motion.span whileTap={{scale:1.1}} onClick={() => setRating(5)}>5 <i className="ri-star-s-line"></i></motion.span>
                          </div>

                          <div className="form_group">
                          <textarea 
                          ref={reviewMsg}
                              rows={4}
                              type="text"
                              placeholder="Leave your feedback"
                              required
                            />
                          </div>
                            <motion.button whileTap={{scale:1.1}} type='submit' className='buy_btn'>Submit</motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="related_title">You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetalis