import React from 'react'
import {Container,Row,Col,Form,FormGroup} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import {useSelector} from "react-redux";


function Checkout() {
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return (
   <Helmet title="Checkout">
    <CommonSection/>
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <h3 className="text-center fw-bold mb-4">Checkout</h3>
            <h6 className="mb-4 fw-bold text-center">Billing Information</h6>
            <Form className="billing_form">
              <FormGroup className="form_group">
                <input type="text" placeholder="Enter your Name"/>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="email" placeholder="Enter your Email"/>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="number" placeholder="Enter your Phone number"/>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="Street address"/>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="City"/>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="Postal Code"/>
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="Country"/>
              </FormGroup>
            </Form>
          </Col>

          <Col lg="4">
            <div className="checkout_cart">
              <h6>Total Qty: <span>{totalQty} items</span></h6>
              <h6>SubTotal: <span>{totalAmount}</span></h6>
              <h6>SubTotal: <span>$1200</span></h6>
              <h6>
                <span>
                Shipping:<br/>
                Free Shipping
                </span>
                <span>$0</span>
                </h6>
              <h4>Total Coast: <span>${totalAmount}</span></h4>
            </div>
            <button  className="buy_btn auth_btn w-100 ">Place an order</button>
          </Col>
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default Checkout