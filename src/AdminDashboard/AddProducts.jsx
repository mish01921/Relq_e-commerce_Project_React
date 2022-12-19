
import React,{useState,useEffect} from 'react';
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Fragment } from 'react';
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addProduct,clearError } from '../redux/actions/productAction';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';
import { ADD_PRODUCT_RESET } from '../redux/constants/productConstant';

function AddProducts() {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [published, setPublished] = useState(true)
  const location = useLocation();
  const navigate = useNavigate()
 const dispatch = useDispatch()
  const categories =[
    "Laptop",
    "BestSales",
    "Accessories"
  ]
  // const redirect = location.search ? location.search.split("=")[1] : "/";

 


  const userRegister = useSelector(state => state.userRegister);
 const { error, loading,  success }= userRegister;


useEffect(()=> {
if(error) {
  console.log(error)
}
if(success){
  navigate("/")
  dispatch({type: ADD_PRODUCT_RESET})
}
}, [dispatch,error,success,navigate])
  
  const addProductHandler = (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.set("title", title);
    formData.set("shortDescription", shortDescription);
    formData.set("description", description);
    formData.set("price", price);
    formData.set("category", category);
    formData.set("published", published);

    imgUrl.forEach(imgUrl => {
      formData.append("imgUrl",imgUrl)
    })

    dispatch(addProduct(formData))
  }

  const onChange = e => {
    const files = Array.from(e.target.files)
    setImagesPreview([])
    setImgUrl([])
console.log(files)
    files.forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
        if(reader.readyState === 2){
          setImagesPreview(oldArray => [...oldArray,reader.result])
          setImgUrl(oldArray => [...oldArray,reader.result])
        }
      }
    })
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
              <input type="text" placeholder="lorem....." value={title} onChange={e => setTitle(e.target.value)} required />
            </FormGroup>
            <FormGroup className="form_group">
              <span>Short Description</span>
              <input type="text" placeholder="lorem....." value={shortDescription} onChange={e => setShortDescription(e.target.value)} required />
            </FormGroup>
            <FormGroup className="form_group">
              <span>Description</span>
              <input type="text" placeholder="Description....." value={description} onChange={e => setDescription(e.target.value)} required />
            </FormGroup>
            <div className="d-flex align-items-center justify-content-between gap-5">
              <FormGroup className="form_group w-50">
                <span>Price</span>
                <input type="number" placeholder="$price" value={price} onChange={e => setPrice(e.target.value)} required />
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
                <input className="w-10" type="file" name="imgUrl" onChange={onChange} multiple required />
              </FormGroup>
             
            </div>

            <FormGroup className="mb-3">
              <input
                type="checkbox"
                onChange={(e) => setPublished(e.target.checked)}
              />
            </FormGroup>

            {imagesPreview.map(img => (
              <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
            ))}

            <button className="buy_btn mb-5" type="submit" disabled={loading ? true : false}>Add Products</button>
          </Form>
        </Col>
      </Row>
    </Container>
    </Fragment>
  )
}

export default AddProducts;