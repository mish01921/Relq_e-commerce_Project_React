import React, { useState } from 'react';
import axios from 'axios';
import Helmet from "../components/Helmet/Helmet";
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBIcon,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

function Signup() {

  const [msg,setMsg] = useState("");
  const [ data, setData ] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: ""
    });
    const [loading,steLoading] = useState(false);

const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
}
const Register = async(e) => {
    e.preventDefault()
    steLoading(true)
   await axios.post("http://localhost:5000/signup", {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword
    })
  
    .then((res) => {setMsg( res.data.msg);
    })
    .catch((err) => {
       setMsg (err.response.data.msg);
    })
  } 
 return (
    <Helmet title="Signup">
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://i0.wp.com/www.tipsnepal.com/wp-content/uploads/2022/03/f3437-aboutus_image1-1.jpg?resize=720%2C405&quality=100&strip=all&ssl=1)' }} >
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: '600px' }} >
        <p style={{color: "red"}}>{msg}</p>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            <form onSubmit={Register}>
              <MDBInput wrapperClass='mb-4' label='Your Name' size='lg'
                name='name'
                type='text'
                value={data.name}
                onChange={handleChange}
              />

              <MDBInput wrapperClass='mb-4' label='Your Surname' size='lg'
                name='surname'
                type='text'
                value={data.surname}
                onChange={handleChange}
              />
                
              <MDBInput wrapperClass='mb-4' label='Your Email' size='lg'
                name='email'
                type='email'
                value={data.email}
                onChange={handleChange}
              />

              <MDBInput wrapperClass='mb-4' label='Password' size='lg'
                name='password'
                type='password'
                maxLength={32}
                value={data.password}
                onChange={ handleChange}
               
              />

           
              <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg'
                name='confirmPassword'
                type='password'
                value={data.confirmPassword}
                onChange={handleChange}
               
              />

              <div className='d-flex flex-row justify-content-center mb-4'>
                <p><Link to="/login">Already registered?</Link></p>
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