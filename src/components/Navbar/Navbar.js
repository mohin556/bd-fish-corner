import React from 'react';
import './Navbar.css';
import logo from '../../Image/logoPic.jpg';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='nav-main'>
               <div className="nav-left">
                 <img className='nav-img' src={logo} alt="" />
               </div>
               <div className="nav-right">
                  
                       <a href="/home"><h4>Home</h4></a>
                       <Link to="/admin"><h4>Admin</h4></Link>
                       
                       <a href="/admin"><h4>Admin</h4></a>
                       <a href="/servicess"><h4>Services</h4></a>
                       <a href="/contact"><h4>Contact</h4></a>
                       <a href="/login"><h4>Login</h4></a>
                     
                  
               </div>
        </div>
    );
};

export default Navbar;