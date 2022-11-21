import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import Services from '../services/Services'
import Clock from '../components/UI/Clock'
import ProductList from '../components/UI/ProductList'
import { Container, Row, Col } from 'reactstrap'
import heroImg from "../assets/images/best_laptops.png"
import "../styles/home.css"
import { motion } from "framer-motion"
import products from '../assets/data/products'
import counterImg from "../assets/images/counter-timer.jpg"


function Home() {
const [trendingProducts,setTrendingProducts] = useState([]);
const [bestSalesProducts,setBestSalesProducts] = useState([]);
const [accessories,setAccessories] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() =>{
    const filterdTrendingProducts = products.filter(item => item.category === "Laptop");
    setTrendingProducts(filterdTrendingProducts)

    const filterdBestSalesProducts = products.filter(item => item.category === "BestSales");
    setBestSalesProducts(filterdBestSalesProducts)

    const filterdAccessoriesProducts = products.filter(item => item.category === "Accessories");
    setAccessories(filterdAccessoriesProducts)

    
  },[])

  return (

    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Tranding Laptop in {year}</p>
                <h2>Combine quality & affordability in one place.</h2>
                <p> Our store offers high quality laptops at affordable prices. Imported directly from the manufacturer.</p>

                <motion.button whileTap={{ scale: 1.1 }} className="buy_btn"><Link to="/shop">SHOP NOW</Link></motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
            <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    <Services />
    <section className="trending_product">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title p-2">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best_sales">
      <Container>
          <Row>
            <Col lg="12" md="12"  className="text-center mb-5">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col className="count_down-col">
            <div className="clock_top-content">
              <h4>Limited Offers</h4>
              <h3>Quality Laptops</h3>
            </div>
              <Clock />
              <motion.button whileTap={{scale:1.2}} className="buy_btn store_button">
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter_img">
              <img src={counterImg} alt=""  />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_accessories">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
            <h2 className="section_title">Accessories</h2>
            </Col>
            <ProductList data={accessories} />
          </Row>
        </Container>

      </section>

    </Helmet >
  )
}

export default Home;