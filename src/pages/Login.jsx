import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { Link } from "react-router-dom"
import { useEffect } from 'react';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState("Password cannot be empty");
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
      
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email")
    } else {
      setEmailError("")
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 9) {
      setPasswordError("Password can be longer than 9")
      if (!e.target.value) {
        setPasswordError("Password can be longer than 9 ")
      }

    } else {
      setPasswordError("")
    }

  }

  const blurHandler = (e) => {
    switch (e.target.name) {

      case "email":
        setEmailDirty(true)
        break;
      case "password":
        setPasswordDirty(true)
        break;
      default:
    }

  }

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
              <MDBInput onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' name="email" type='email' size="lg" />

              {(passwordDirty && passwordError) && <div style={{ color: "red" }}>{passwordError}</div>}
              <MDBInput onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} wrapperClass='mb-4 w-100' label='Password' maxLength={24} id='formControlLg' name="password" type='password' size="lg" />
              
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
              <p className=''><Link to={"checkout"}>Create account</Link></p>

              <MDBBtn disabled={!formValid} type='submit' size='lg'>
                Login
              </MDBBtn>

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
  );
}

export default Login;