import React, { useState,useEffect } from 'react';
import Helmet from "../components/Helmet/Helmet";
import {useNavigate,useLocation} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import { signup } from '../redux/actions/userActions';
import Message from '../LoadingError/Error';
import Loading from '../LoadingError/Loading';


function Signup() {
const [name, setName] = useState('');
const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/login"

  useEffect(() => {
    if(userInfo) {
      navigate(redirect)
    }
    return () => {

    }
  },[userInfo])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signup(name,surname, email, password,confirmPassword));
  }
 return (
    <Helmet title="Signup">
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2022/03/f3437-aboutus_image1-1.jpg?resize=720%2C405&quality=100&strip=all&ssl=1)' }} >
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }} >
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}

            <form onSubmit={submitHandler}>
              <MDBInput wrapperClass='mb-4' label='Your Name' size='lg'
                name='name'
                type='text'
                onChange={(e) => setName(e.target.value)}
                required

              />

              <MDBInput wrapperClass='mb-4' label='Your Surname' size='lg'
                name='surname'
                type='text'
                onChange={(e) => setSurName(e.target.value)}
                required

              />
                
              <MDBInput wrapperClass='mb-4' label='Your Email' size='lg'
                name='email'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                required

              />

              <MDBInput wrapperClass='mb-4' label='Password' size='lg'
                name='password'
                type='password'
                maxLength={32}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

           
              <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg'
                name='confirmPassword'
                type='password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
               
              />

              <div className='d-flex flex-row justify-content-center mb-4'>
              <p><Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>Already registered?</Link></p>

              </div>
              <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
            </form>

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
      </MDBContainer>
    </Helmet>
  );
}

export default Signup;