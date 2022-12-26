import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "../styles/dashboard.css"
function Dashboard() {
  return (
   <>
    <section>
      <Container>
        <Row>
          <Col className="lg-3">
            <div className="revenue_box">
              <h5>Total Sales</h5>
              <span>$9000</span>
            </div>
          </Col>
          <Col className="lg-3">
            <div className="orders_box">
              <h5>Orders</h5>
              <span>400</span>
            </div>
          </Col>
          <Col className="lg-3">
          <div className="products_box">
              <h5>Total Products</h5>
              <span>500</span>
            </div>
          </Col>
          <Col className="lg-3">
          <div className="users_box">
              <h5>Total Users</h5>
              <span>100</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
   </>
  )
}

export default Dashboard