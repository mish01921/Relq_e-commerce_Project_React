import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import heroImg from "../assets/images/best_laptops.png"
import "../styles/home.css"

function Home() {
  const year = new Date().getFullYear
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Tranding Laptop {year}</p>
                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta iusto quibusdam dignissimos necessitatibus officiis. Obcaecati porro iure numquam sit sapiente.
                </p>
                <button className="buy_btn">SHOP NOW</button>
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
    </Helmet>
  )
}

export default Home