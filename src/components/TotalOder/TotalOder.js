import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lists from '../Lists/Lists';
import Table from 'react-bootstrap/Table';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from "react-router-dom";
import ModeEdit from '@mui/icons-material/ModeEdit';
import { getAuth } from 'firebase/auth';
import app from './../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbarr from '../Navbarr/Navbarr';
import './TotalOder.css';
const TotalOder = () => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
     const [isAdmin,setIsAdmin] = useState(false);
    const [oderList,setOderList] = useState([]);
  


    useEffect(()=>{
      
      const url = `http://localhost:5000/list`;
      fetch(url)
      .then(res => res.json())
      .then(data => setOderList(data))


    },[])




   
    useEffect(()=>{
      fetch('http://localhost:5000/isAdmin',{
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({email: user.email})
       })
       .then(res => res.json())
       .then(data => setIsAdmin(data));


    },[user])

    const handleOderDelete = (id) =>{
        const ok =window.confirm('Are You Sure??');
        if(ok){
          
          const url = `http://localhost:5000/delete/${id}`;
          fetch(url,{
            method: "DELETE"
          })
          .then(res=> res.json())
          .then(data => 
         {     
          if(data.deletedCount > 0)
           {
            const remaining = oderList.filter(list => list._id !== id);
            setOderList(remaining);
           }
  
         }
          
          
          )
        }
          
      }



    return (

      
      
          <div >
       
          
      
         <h1>Total Oder :0{oderList?.length} </h1>
       
       
              
            <Table striped bordered hover size="sm">
      <thead className='bg-secondary text-white font-weight-bold '  >
        <tr>
          <th>Serial</th>
          <th> Name </th>
          <th>Oder Id & Email</th>
          <th>Action</th>
        </tr>
      </thead>
         <tbody className='font-italic'>
        
      {
         oderList.map((list, index) => (
          <tr>
           <th scope="row" > {index + 1 }</th>
           <td>{list?.name} </td>
           <td> {list?._id} <br /> 
              <p className='text-primary'>  {list?.email}</p>
            </td>
           <td  >  
        <Link to={`/check/${list?._id}`} class="btn btn-primary mr-2" > View </Link>
       
        <Link to="" class="btn btn-danger" onClick={() =>handleOderDelete(list?._id)} > Remove </Link>
       
             </td>
           
         

          </tr>
         ) )
      }



        </tbody>
    </Table>


          
          </div>
    
    );
};

export default TotalOder;