import React, { useState, useEffect } from 'react';
import Helmet from "../components/Helmet/Helmet";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
}
  from 'mdb-react-ui-kit';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../redux/actions/userActions';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate()

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userSignin = useSelector((state) => state.userSignin);
  const { error, loading, userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [userInfo, navigate, redirect])
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password))
  }


  return (
    <Helmet title="Login">
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2022/03/f3437-aboutus_image1-1.jpg?resize=720%2C405&quality=100&strip=all&ssl=1)' }}>
        <MDBRow className='d-flex justify-content-center align-items-center h-100' >
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }} >
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}

                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <form onSubmit={submitHandler}>
                  <MDBInput wrapperClass='mb-4 w-100' label='Email address'
                    id='email'
                    type='email' size="lg"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <MDBInput wrapperClass='mb-4 w-100' label='Password' maxLength={32}
                    id='password'
                    type='password' size="lg"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <p><Link to={redirect ? `/signup?redirect=${redirect}` : "/sinup"}>Create an account</Link></p>

                  <MDBBtn type='submit' size='lg'>
                    Login
                  </MDBBtn>
                </form>
                <hr className="my-4" />
                <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with google
                </MDBBtn>

                <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Sign in with facebook
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Helmet>
  );
}

export default Login;