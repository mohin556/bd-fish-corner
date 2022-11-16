import React from 'react';
import './Navbarr.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Image/logoPic.jpg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useFirebase from '../../hook/useFirebase';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Navbarr = () => {
  const {handleSignout} = useFirebase();
  const auth = getAuth(app)
  const [user, loading, error] = useAuthState(auth);

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



    return (

          <Navbar  className='nav-clr'  collapseOnSelect expand="lg" fixed='top'  variant="dark">
      <Container>
        <Navbar.Brand className='nav-brand' as={Link} to="/" >
     
           <h4>BD-FISH-CORNER</h4> 
           
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"> </Nav>
          <Nav className='nav-option'>
          <Nav.Link href="home#advantage"> Advantage </Nav.Link>
          <Nav.Link href="home#features"> Features </Nav.Link>
          <Nav.Link as={Link} to="/lists" > Oders </Nav.Link>
          <Nav.Link href="home#footer"> Contact </Nav.Link>
          <Nav.Link  as={Link} to="/admin" > Admin </Nav.Link>
        {  user?.uid ?  <Nav.Link  onClick={handleSignout} >
              Logout
            </Nav.Link>
         :
        <Nav.Link eventKey={2} as={Link} to="/login" >
              Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 






         
      



   
  
    );
};

export default Navbarr;