import React,{useState} from 'react'
import {Container,Row,Col,Form,FormGroup} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import {useSelector} from "react-redux";


function Checkout() {
  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [adress,setAddress] = useState("");
  const [city,setCity] = useState("");
  const [postalCode,setPostalCode] = useState("");
  const [country,setCountry] = useState("");

  const submitHandler = (e)=> {
    e.preventDefault()
  }

  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  return (
   <Helmet title="Checkout">
    <CommonSection/>
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <h3 className="text-center fw-bold mb-4">Checkout</h3>
            <h6 className="mb-4 fw-bold text-center">Billing Information</h6>
            <Form className="billing_form" onSubmit={submitHandler}>
              <FormGroup className="form_group">
                <input type="text" placeholder="Enter your Fullname"
                id="fullName"
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                required
                />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="email" placeholder="Enter your Email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="number" placeholder="Enter your Phone number"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
                required
                />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="Street address"
                id="address"
                value={adress}
                onChange={(e)=>setAddress(e.target.value)}
                required
                />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="City"
                id="city"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                required
                />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="Postal Code"
                id="postalCode"
                value={postalCode}
                onChange={(e)=>setPostalCode(e.target.value)}
                required
                />
              </FormGroup>

              <FormGroup className="form_group">
                <input type="text" placeholder="Country"
                id="country"
                value={country}
                onChange={(e)=>setCountry(e.target.value)}
                required
                />
              </FormGroup>
              <button  className="buy_btn auth_btn w-100 mb-1">Place an order</button>
            </Form>
          </Col>

          <Col lg="4">
            <div className="checkout_cart">
              <h6>Total Qty: <span>{totalQty} items</span></h6>
              <h6>SubTotal: <span>{totalAmount}</span></h6>
              <h6>SubTotal: <span>{totalPrice}</span></h6>
              <h6>
                <span>
                Shipping:<br/>
                Free Shipping
                </span>
                <span>$0</span>
                </h6>
              <h4>Total Cost: <span>${totalAmount}</span></h4>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default Checkout