import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import heroImg from "../assets/images/best_laptops.png"
import "../styles/home.css"
import { motion } from "framer-motion"
import Services from '../services/Services'
import ProductList from '../components/UI/ProductList'

function Home() {

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Tranding Laptop {new Date().getFullYear()}</p>
                <h2>Combine quality & affordability in one place.</h2>
                <p>
                Our store offers high quality laptops at affordable prices. Imported directly from the manufacturer.
                </p>
                <motion.button whileTap={{scale:1.1}} className="buy_btn"><Link to="shop">SHOP NOW</Link></motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
            <div className="hero_image">
              <img src={heroImg} alt=""/>
            </div>
            </Col>

          </Row>
        </Container>
      </section>
      <Services/>
      <section className="trending-product">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="section_title">Tranding Product</h2>
          </Col>
          <ProductList />

        </Row>
      </section>
    </Helmet>
  )
}

export default Home;