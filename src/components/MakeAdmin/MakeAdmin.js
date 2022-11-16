import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './MakeAdmin.css';
import Navbarr from '../Navbarr/Navbarr';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from '@mui/material/Alert';

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  function refreshPage() {
    window.location.reload(false);
  }
  // fetch('http://localhost:5000/senddata', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(oder),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     toast('Oder Confirm Successfully')
     
  //   })
   

    const onSubmit = data => {   
      fetch('http://localhost:5000/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          toast('admin making success')
          
     


       
      //  axios.post('http://localhost:5000/admin',data)
      //  .then(res => {
      //   if(res.data.insertedId)
      //   {toast('Admin Added Successfully')}
        // if(res.data.insertedId){
        //  alert('Id Created by MongoDb')
        // }
          
     } )

   refreshPage()
    };

     


    return (
        <div className='admin-container'>
          <Navbarr/>
            
            
            <div className='admin-form'>
            <h3 className='admin-heading'>Make Admin First</h3>
            <form className='add-form'  onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name")} placeholder="Admin Name" />
            <br />
            <br />
            <input type="email" {...register("email")} placeholder="email" />
            <br />
            <br />
          
           <input className='btn btn-success' type="submit" />
       
           <ToastContainer />
         </form>
            </div>
              

        </div>
    );
};

export default MakeAdmin;