import React from 'react';
import './Navbar.css';
import logo from '../../Image/logoPic.jpg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



    return (
        <div className='nav-main'>
               <div className="nav-left">
                 <img className='nav-img' src={logo} alt="" />
               </div>
               <div className="nav-right">
                  
                       {/* <a href="/"><h4>Home</h4></a> */}
                       <Link className='nav-option' to="/"><h4>Home</h4></Link>
                       
                       <Link className='nav-option' to="/admin"><h4>Admin</h4></Link>
                       <Button
        className='nav-option dropdown '
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <h6> Services</h6>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >  
        
        <MenuItem onClick={handleClose}><Link  to="/admin">Admin</Link></MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        {/* <MenuItem onClick={handleClose}><Link  to="/admin">Admin</Link></MenuItem> */}
        {/* <MenuItem onClick={handleClose}>Edit</MenuItem>  */}
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
                   
                   
                       {/* <Link className='nav-option' to="/admin"><h4>Service</h4></Link> */}
                       <Link className='nav-option' to="/contact"><h4>contact</h4></Link>
                       <Link className='nav-option' to="/login"><h4>login</h4></Link>
                       {/* <Link className='nav-btn' to="/signIn"><h4>Sign Up</h4></Link> */}
                       <div  className='nav-btn' >
      <Button
        className='nav-option'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Details
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >  
        
        <MenuItem onClick={handleClose}><Link  to="/">Admin</Link></MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
                       {/* <a href="/admin"><h4>Admin</h4></a> */}
                       {/* <a href="/servicess"><h4>Services</h4></a>
                       <a href="/contact"><h4>Contact</h4></a>
                       <a href="/login"><h4>Login</h4></a> */}
                     
                  
               </div>
        </div>
    );
};

export default Navbar;