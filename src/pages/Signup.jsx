import React from 'react';
import Helmet from "../components/Helmet/Helmet";
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';


function Signup() {

  return (
    <Helmet title="Signup">
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2022/03/f3437-aboutus_image1-1.jpg?resize=720%2C405&quality=100&strip=all&ssl=1)' }}>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>

            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />

            <MDBInput wrapperClass='mb-4' label='Your Surname' size='lg' id='form1' type='text' />

            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />

            <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />

            <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' />

            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div>
            <p><Link to="/login">Already registered?</Link></p>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          
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