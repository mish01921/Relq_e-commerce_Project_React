import React from 'react';
import "../styles/cart.css";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import {Container,Row,Col} from "reactstrap";
import tdImg from "../assets/images/dell-xps-13-9315BestSales03.png"

function Cart() {
  return (
    <Helmet title={"Cart"}>
      <CommonSection/>
        <section>
          <Container>
            <Row>
              <Col lg="6">
                <table className="table bordered">
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                  <tr>
                    <td><img src={tdImg} alt="" /></td>
                    <td>Brending Laptop</td>
                    <td>$1200</td>
                    <td>2px</td>
                    <td><i className="ri-delete-bin-6-line"></i></td>
                  </tr>
                </table>
              </Col>

              <Col lg="3"></Col>
            </Row>
          </Container>
        </section>

    </Helmet>
  )
}

export default Cart;