import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEdit from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import './List.css'
import { Link } from 'react-router-dom';
import Navbarr from './../Navbarr/Navbarr';
import { getAuth } from 'firebase/auth';
import app from './../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Lists = ({list}) => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const [items,setItems] = useState([]);

  useEffect(()=>{
    const url = `http://localhost:5000/services`;
    fetch(url)
    .then(res=> res.json())
    .then(item => setItems(item))

  },[])
 
  const handleDeleteItems = (id) =>{
      console.log(id,"deleting Item")
      const remove = window.confirm("want to detele !");
      if(remove){
        const url = `http://localhost:5000/items/${id}`;
        fetch(url,{
          method : "DELETE"
        })
        .then(res=> res.json())
        .then(data => {
          if(data.deletedCount > 0){
             
            const remaining = items.filter(item => item._id !== id);
            setItems(remaining)

          }


          })
  
      }
     
      

  }


  
    return (
        <Container className='List-item' >
         <div className='list-nav'>
         <Navbarr></Navbarr>
         </div>
           <Row>
          <Col>
        
         <h2 className='mt-10'>Total Item : 0{items.length}</h2>
         <Table striped bordered hover size="sm">
      <thead className='bg-secondary text-white font-weight-bold '  >
        <tr>
          <th>Serial</th>
          <th> Name </th>
          <th>Oder Id & email</th>
          <th>Action</th>
        </tr>
      </thead>
         <tbody className='font-italic'>
        
      {
         items.map((item, index) => (
          <tr>
           <th scope="row" > {index + 1 }</th>
           <td>{item?.Name} </td>
           <td> {item?._id}</td>
           
           <td  >  
        <Link to={`/view/${item._id}`} class="btn btn-primary mr-2" > <RemoveRedEyeIcon/> </Link>
        <Link to={`/update/${item._id}`}  class="btn btn-outline-primary mr-1"   ><ModeEdit/> Edit </Link>
        <Link to="" class="btn btn-danger" onClick={()=> handleDeleteItems(item._id)} > <DeleteIcon/> </Link>
       
            
             </td>
           
         

          </tr>
         ) )
      }



        </tbody>
    </Table>

          
          
          


          </Col>
          


           </Row>
          
        </Container>
    );
};

export default Lists;