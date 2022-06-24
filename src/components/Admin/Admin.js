import React from 'react';
import { Link } from 'react-router-dom';
import Advantages from '../Advantages/Advantages';
import Navbar from '../Navbar/Navbar';

import './Admin.css'
const Admin = () => {


    return (
        
        <div className='admin-container'>
            <Navbar />
          <div className="admin">
          <div className="admin-left">
             
             <h4> helllow   </h4>
             <Link to='/add.'  > <h4>Add Events</h4></Link>

        </div>
          
         <div className="admin-right">
             <h1>Admin page </h1>
             
         </div>
       




          </div>
       

        </div>
    );
};

export default Admin;