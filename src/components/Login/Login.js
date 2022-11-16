import React, { useRef } from 'react';
import './login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useFirebase from './../../hook/useFirebase';
import GoogleIcon from '@mui/icons-material/Google';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Container from 'react-bootstrap/Container';

import app from './../firebase.init';
import { signOut } from 'firebase/auth';
import Navbarr from '../Navbarr/Navbarr';
const Login = () => {
      const emailRef = useRef('');
      const passwordRef = useRef('');



     const location = useLocation();
     const navigate = useNavigate();
    
     const from = location?.state?.from?.pathname || "/";
     const auth = getAuth(app);

    const { handleSignout} = useFirebase();
    const [user] = useAuthState(auth);
  
    const [signInWithGoogle] = useSignInWithGoogle(auth);

   const handleGoogleSingn = () =>{
        signInWithGoogle()
        .then(()=>{
          navigate(from, {replace: true})
        })

   }
  const handleSubmit = event =>{
      event.preventDefault()
   const  email = emailRef.current.value;
    const  password = passwordRef.current.value;
   
    console.log(email,password)

  }



   
    return (
        <Container className='  w-50 mx-auto '>
          <Navbarr/>
         { 
         user?.uid ? <h3 className='divvv'>Login Success</h3> 
         :
         <h2 className='divvv text-danger text-center '>Login Please</h2>
         
         }
    
         <div className='from-login '>
         {
          user?.uid
          ? <h4 className='divvv'  > <span> {user?.displayName} </span>  <br />  You are already login    </h4> 
            
          :   <Form   onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <h5>Or</h5>
       
        </Form>
        
         }  
    
       <div>
          {
           user?.uid
            ?
           <Button variant="secondary" size="lg" onClick={handleSignout}  > <LogoutIcon sx={{ fontSize: 40 }} /> Log OUT </Button>
          
            :
            <Button className='G-button font-weight-bold' variant="secondary" size="sm" onClick={handleGoogleSingn} > <GoogleIcon  sx={{ fontSize: 25 }} className='g-icon' /> Google signIn </Button>
            
          }
       </div>
      


         </div>
    
   </Container>
    );
};

export default Login;