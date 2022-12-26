import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Fragment } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { createProduct } from '../redux/actions/productAction';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';

function AddProducts() {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState([]);
  const [published, setPublished] = useState(true)
  const dispatch = useDispatch()

  const categories = [
    "Laptop",
    "BestSales",
    "Accessories"
  ]

const productCreate = useSelector((state) => state.productCreate)
const {loading,error,products} = productCreate
 useEffect(() => {
  if(products) {
    console.log("Product added")
  }
  setTitle("");
  setShortDescription("");
  setDescription("");
  setCategory("");
  setPrice("");
  setPublished("");
 },[products,dispatch])
  const addProductHandler = async (e) => {
    e.preventDefault();
    dispatch(createProduct(title,shortDescription,description,category,price,imgUrl,published))
  }
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Products</h4>
            <Form onSubmit={addProductHandler} method="POST" encType='multipart/form-data'>
             {error && <Message variant="alert-danger">{error}</Message>}
              {loading && <Loading />}
              <FormGroup className="form_group">
                <span>Product title</span>
                <input
                  type="text"
                  placeholder="lorem....."
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form_group">
                <span>Short Description</span>
                <input
                  type="text"
                  placeholder="lorem....."
                  value={shortDescription}
                  onChange={e => setShortDescription(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form_group">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Description....."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                />
              </FormGroup>
              <div className="d-flex align-items-center justify-content-between gap-5">
                <FormGroup className="form_group w-50">
                  <span>Price</span>
                  <input
                    type="number"
                    placeholder="$price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup className="form_group">
                  <span>Category</span>
                  <select className="w-100 p-2" value={category} onChange={e => setCategory(e.target.value)} required>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </FormGroup>
              </div>

              <div >
                <FormGroup className="form_group">
                  <span>Product Img</span>
                  <input
                    className="w-10"
                    type="file"
                    name="imgUrl"
                    onChange={e => setImgUrl(e.target.files[0])}
                    multiple
                    required
                  />
                </FormGroup>
              </div>

              <FormGroup className="mb-3">
                <span>Published or not </span>
                <input
                  type="checkbox"
                  onChange={(e) => setPublished(e.target.checked)}
                />
              </FormGroup>
              <button className="buy_btn mb-5" type="submit">Add Products</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default AddProducts;