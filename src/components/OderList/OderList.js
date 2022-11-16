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
import TotalOder from '../TotalOder/TotalOder';

const OderList = () => {
  const auth = getAuth(app);
    const [list,setList] = useState([]);
    const [isAdmin,setIsAdmin] = useState(false);
    const [user] = useAuthState(auth);
    
    useEffect(()=>{
      const email = user?.email;
      const url = `http://localhost:5000/lists?email=${email}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setList(data))


    },[user])
    useEffect(()=>{
      fetch('http://localhost:5000/isAdmin',{
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({email: user?.email})
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
          const remaining = list.filter(list => list._id !== id);
          setList(remaining);
         }

       }
        
        
        )
      }
        
    }
    


    return (
        <Container>
        <Row>

          <Navbarr/>
          <Col className='oder-detail-2'>
       
           { isAdmin ? <TotalOder/> :
           <div>

           <h1>Your Oder :{list?.length} </h1>
       
       
       <Table striped bordered hover size="sm">
        <thead className='bg-secondary text-white font-weight-bold '  >
    <tr>
       <th>Serial</th>
        <th> Name </th>
       <th>Oder Id</th>
       <th>Action</th>
     </tr>
   </thead>
    <tbody className='font-italic'>
   
 {
    list.map((list, index) => (
     <tr>
      <th scope="row" > {index + 1 }</th>
      <td>{list?.name} </td>
      <td> {list?._id} </td>
      <td  >  
   <Link to={`/check/${list?._id}`} class="btn btn-primary mr-2" > <RemoveRedEyeIcon/> </Link>
  
   <Link to="" class="btn btn-danger" onClick={() =>handleOderDelete(list?._id)} > <DeleteIcon/> </Link>
  
        </td>   

     </tr>
    ) )
 }

   </tbody>
</Table>
           </div>
             



           }


          
          </Col>
        </Row>
      </Container>
    );
};

export default OderList;