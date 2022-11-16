import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { getAuth } from 'firebase/auth';
import app from './../firebase.init';
import './OderDetails.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbarr from './../Navbarr/Navbarr';
import { Form } from 'react-bootstrap/Form';
import { initializeApp } from 'firebase/app';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const OderDetails = () => {
    const auth = getAuth(app);
    const {oderId} = useParams();
    const [oder,setOder] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user?.email)
    const navigate = useNavigate();
    
    const [item,setItem]= useState({});
   

    const selectedItem = oder.find( pd => pd._id === oderId );
   
    // const {emailId} = user?.email;
   
  
     
    const  oderSend = event=>{
 
      const oder ={
        email : user.email,
        name : selectedItem.Name,
        price : selectedItem.price,
        image : selectedItem.image,
        description : selectedItem.description

      }
      // axios.post('http://localhost:5000/senddata',oder)
      // .then(res => {
      //   console.log(res)
      // })

      fetch('http://localhost:5000/senddata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(oder),
      })
        .then((response) => response.json())
        .then((data) => {
          toast('Oder Confirm Successfully')
         
        })

    }



    useEffect(()=>{
        const url = `http://localhost:5000/services/${oderId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))

    },[])

 
     console.log(oderId)
    useEffect(()=>{
        const url = `http://localhost:5000/services`;
        fetch(url)
        .then(res => res.json())
        .then(document => setOder(document) )
    },[])





    return (
        <Container className='update'>
          <Navbarr></Navbarr>
         <Col>
        <div className='update-1'>
               {/* <h6 className='text-success' >Id No : {selectedItem?._id}</h6> */}
               <from onSubmit={oderSend}>
               <h6 className='text-success font-weight-bold' >Id No : {selectedItem?._id}</h6>
             {/* Id No:<input className='text-success' name="id" type="text" value={ selectedItem?._id} readOnly disabled /> <br></br> */}
               {/* <h6 className='text-success' > Name :  {selectedItem?.Name}</h6> */}
               
              Name :<input className='text-success' name="name" type="text" value={ selectedItem?.Name} readOnly disabled/>
               <br />
              
               <img className='update-img' src={selectedItem?.image} alt="" />
               <br />
               <br />
               <h6 className='text-success font-weight-bold' >Price: {selectedItem?.price}$</h6>
              {/* Price :<input className='text-success' name='price' type="text" value={ selectedItem?.price}$ readOnly disabled /> */}
          
             mail: <input className='text-success' name='email' type="text" value={user?.email} readOnly disabled id="" />
              
               <p className='text-dark font-weight-light'>{selectedItem?.description}</p>
               {/* <input type="submit" value="Proced" /> */}
               {/* <Button onClick={()=> oderSend()} variant="success"> Proced !</Button> */}
               <Button onClick={()=> oderSend()} variant="success"> Proced !</Button>
               <ToastContainer />

            
           
               </from>
                
            </div>
            

</Col>





           {/* <div className='detail-left' >
                   <img src={selectedItem?.image} alt="" />
            </div>
            <div className='detail-right' >
               <h5> Item Name : {selectedItem?.Name}</h5>
                   <p>{selectedItem?.description}</p>
                <h5>Price : {selectedItem?.price}$</h5>
                 <Button onClick={()=> oderSend()} variant="success"> Oder Now !</Button>
             
            </div> */}

        </Container>
    );
};

export default OderDetails;