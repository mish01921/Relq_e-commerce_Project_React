import React from 'react';
import "../styles/cart.css";
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col} from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux"


function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  return (
    <Helmet title={"Cart"}>
      <CommonSection />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              {
                cartItems.length === 0 ? (
                  <h2 className="fs-4 text-center" >No item added to the cart<span role="img" aria-label="Smile">&#128542;</span></h2>) : (
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item, index) => (
                          <Tr item={item} key={index} />
                        ))}

                    </tbody>
                  </table>
                )}
            </Col>

            <Col lg="2">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">SubTotal</h6>
                <span className="fs-4 fw-bold">${totalAmount}</span>
              </div>
              <p>Total price of products</p>
              <div>
                <button className="buy_btn"><Link to="/shop">Countine Shopping</Link></button>

                <button className="buy_btn"><Link to="/checkout">Checkout</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <motion.td whileTap={{ scale: 1.1 }} onClick={deleteProduct}><i className="ri-delete-bin-6-line"></i></motion.td>
    </tr>
  )
}

export default Cart;