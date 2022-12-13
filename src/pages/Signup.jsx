import React, { useState} from 'react';
import {useForm} from "react-hook-form"
import Helmet from "../components/Helmet/Helmet";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import { registerUser } from '../redux/UserAction/userAction';
import Error from "../LoadingError/Error";
import Spinner from "../LoadingError/Spinner"
import { useEffect } from 'react';


function Signup() {
  const [customError, setCustomError] = useState(null)
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (success) navigate('/login')
  }, [navigate, userInfo, success])

  const submitForm = (data) => {

    if (data.password !== data.confirmPassword) {
      setCustomError('Password mismatch')
      return
    }
    dispatch(registerUser(data))
  }
  return (
    <Helmet title="Signup">
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2022/03/f3437-aboutus_image1-1.jpg?resize=720%2C405&quality=100&strip=all&ssl=1)' }} >
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }} >
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            {error && <Error>{error}</Error>}
            {customError && <Error>{customError}</Error>}
            <form onSubmit={handleSubmit(submitForm)}>
              <MDBInput wrapperClass='mb-4' label='Your Name' size='lg'
                name='name'
                type='text'
                {...register('name')}
                required

              />

              <MDBInput wrapperClass='mb-4' label='Your Surname' size='lg'
                name='surname'
                type='text'
                {...register('surname')}
                required

              />

              <MDBInput wrapperClass='mb-4' label='Your Email' size='lg'
                name='email'
                type='email'
                {...register('email')}
                required

              />

              <MDBInput wrapperClass='mb-4' label='Password' size='lg'
                name='password'
                type='password'
                {...register('password')}
                required
              />


              <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg'
                name='confirmPassword'
                type='password'
                {...register('confirmPassword')}
                required

              />

              <div className='d-flex flex-row justify-content-center mb-4'>
            
              </div>
              <MDBBtn type='submit' className='mb-4 w-100 gradient-custom-4' size='lg' disabled={loading}>   {loading ? <Spinner /> : 'Register'}</MDBBtn>
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