import React from 'react'
import "./footer.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className="text-white">TrendBrand</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              In our store, you will find the most branded, most affordable, most demanded and most importantly original and high-quality assortment. The range corresponds to European standards. The quality is guaranteed.
            </p>
          </Col>

          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Category</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center">
                  <Link to="#">Trending Products</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center">
                  <Link to="#">Best Sales</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center">
                  <Link to="#">Accessories</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Contacts</h4>
              <ListGroup className="footer_content">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>Gyumri Yeghishe Charents street 1/3</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <span><i className="ri-phone-line"></i></span>
                  <p>+374 77 77-77-77</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <span><i className="ri-mail-line"></i></span>
                  <p>TrendBrand@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_copyright">Copyright {year} developed by Misha Baghdasaryan.All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer