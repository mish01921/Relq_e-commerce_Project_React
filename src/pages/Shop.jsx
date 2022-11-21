import React from 'react';
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet"
import {Col, Container, Row} from "reactstrap"
import "../styles/shop.css"

function Shop() {
  return (
   <Helmet title="Shop">
    <CommonSection  title="Products" />


    <section>
      <Container>
        <Row>
          <Col lg="3" md="3">
            <div className="filter_widget">
              <select>
                <option>Filtered by Category</option>
                <option value="">Anun</option>
                <option value="">Anun</option>
                <option value="">Anun</option>
                <option value="">Anun</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="3">
            <div className="filter_widget">
              <select>
                <option>Sort by</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="search_box">
              <input type="text" placeholder="Search...."/>
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default Shop