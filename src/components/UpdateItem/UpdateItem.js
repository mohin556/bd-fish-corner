import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './UpdateItem.css'
import Navbarr from './../Navbarr/Navbarr';


const UpdateItem = () => {
    const {id} = useParams();
   const [item,setItem] = useState({});
   const { register, handleSubmit } = useForm();
   function refreshPage() {
    window.location.reload(false);
  }


   const onSubmit = updated=> {   
    const url = `http://localhost:5000/services/${id}`;
   fetch(url,{
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updated)
   })

 refreshPage()

};






   useEffect(()=>{
   const url = `http://localhost:5000/services/${id}`;
   fetch(url)
   .then(res =>res.json())
   .then(data => setItem(data))
   },[])
   function UserGreeting() {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting() {
    return <h1>Please sign up.</h1>;
  }


    return (
        <Container className='update'>
            <Navbarr></Navbarr>
      <Row>
        <Col>
        <div className='update-1'>
               <h6 className='text-success' >Id No : {id}</h6>
             
               <h6 className='text-success' > Name :  {item.Name}</h6>
               <img className='update-img' src={item.image} alt="" />
               <h5 className='text-success' >Price: {item.price}$</h5>
               <p className='text-dark font-weight-light'>{item.description}</p>
           
              
            </div>

        </Col>
        <Col className='update-col2'>
           <div className="update-right">
               <h3>Edit Service </h3>
               <form className='add-form'  onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name")} placeholder="Edit Name" />
                <textarea {...register("description")} placeholder="Edit Description" />
                <textarea {...register("price")} placeholder="Edit Price" />
                <input type="text" {...register("image")} placeholder="Edit image Url" />
                <input type="submit" value='Update' />
              </form>
               </div> 
        
        </Col>
      </Row>
         
          


        </Container>
       
    );
};

export default UpdateItem;