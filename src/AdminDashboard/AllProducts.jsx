import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct, deleteProdcut} from '../redux/actions/productAction';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';

function AllProducts() {
  const dispatch = useDispatch()
  const getAllProducts = useSelector((state) => state.getAllProducts)
  const { loading, error, products } = getAllProducts

  const productDelete = useSelector((state) => state.productDelete)
  const { error: errorDelete, success: successDelete } = productDelete
  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch, successDelete, errorDelete])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProdcut(id))

    }
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <table className="table">
                {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {
                  products && products.map((item, index) =>
                    <tbody item={item} key={index}>
                      <tr>
                        <td>{item.id}</td>
                        <td><img src={item.imgUrl} alt="" /></td>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{`$${item.price}`}</td>
                        <td>
                          <button className="btn btn-danger" onClick={() => deleteHandler(item.id)}>Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  )
                }
              </table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AllProducts;