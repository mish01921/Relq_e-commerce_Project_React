import React, { useEffect } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct,deleteProdcut } from '../redux/actions/productAction';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';

function AllProducts() {
  const dispatch = useDispatch()
  const getAllProducts = useSelector((state) => state.getAllProducts)
  const { loading, error, products } = getAllProducts

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  const deleteHandler = (id) => {
    const productDelete = useSelector((state) => state.productDelete)
    const {success: successDelete } = productDelete
    useEffect(() => {
      dispatch(deleteProdcut(id));
    }, [dispatch, successDelete])
  };
  console.log(products)


  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <table className="table">
                  {error && <Message variant="alert-danger">{error}</Message>}
                {loading &&  <Loading />}
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

                  products && products.map((item, id) => console.log(`localhost:5000/Images/${item.imgUrl}`) ||
           
                    <tbody item={item} key={id}>
                      <tr>
                        <td>{item.id}</td>
                        <td><img src={`localhost:5000/Images/${item.imgUrl}`} alt="" /></td>
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