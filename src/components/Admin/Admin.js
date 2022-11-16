import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Advantages from '../Advantages/Advantages';
import Navbarr from '../Navbarr/Navbarr';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ListIcon from '@mui/icons-material/List';
import app from './../firebase.init';


import './Admin.css'

const Admin = () => {
    const [isAdmin,setIsAdmin] = useState(false);
  
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
   
    useEffect(()=>{
        fetch('http://localhost:5000/isAdmin',{
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email: user.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    },[])



    return (
        

        <div className='admin-mcontainer'>
              <Navbarr></Navbarr>
          <div className="admin">
            <div className="admin-left">
            
             <h4>_______________  </h4>
       {  isAdmin ? <div className='admin-icon'>
             <Link to='/add.'  >   <h4> <LibraryAddIcon/> Add Events</h4></Link>
             <Link to='/total'  >    <h4> <ListIcon/>  Service Lists</h4></Link>
             <Link to='/beadmin'  >    <h4> <AdminPanelSettingsIcon />  Add Admin User </h4></Link>

          </div>:
          <div>
            <h4 className='text-danger'> You are Not An Admin </h4>
            <h4 className='text-danger' >Pls Be Admin First</h4>
             <h4> < ArrowDownwardIcon />  </h4>
            <Link to='/beadmin'  >    <h4> <AdminPanelSettingsIcon />  Add Admin User </h4></Link>
          </div>
          
        
        
        }

        </div>
          
         <div className="admin-right">
           { 
             isAdmin ?
                <h1 className=''>WellCome Admin ! </h1> :
          
                <h1 className='text-danger'>You are not an Admin <br />
                   be Admin first

                </h1>
         
            
            }
             
         </div>
       




          </div>
       

        </div>
    );
};

export default Admin;