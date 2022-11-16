import React from 'react';
import './AddEvents.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';
const AdEvents = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {   
        console.log(data)
       axios.post('http://localhost:5000/services',data)
       .then(res => {
        
        if(res.data.insertedId){
         alert('Id Created by MongoDb')
        }
        
        
     } )


    };

    return (
        <div>
           <div className="admin">

               <div className="admin-left">
                <Link to='/total'  >    <h4>Item List</h4></Link>

              </div>
          
    <div className="admin-right">
             <h1>Add Service </h1>
            <form className='add-form'  onSubmit={handleSubmit(onSubmit)}>
               <input {...register("Name")} placeholder="Name" />
               <textarea {...register("description")} placeholder="Description" />
               <input type="text" {...register("image")} placeholder="image Url" />
               <input type="number" {...register("price")} placeholder="price" />
        
                <input type="submit" />
           </form>
     </div>
       




          </div>
       
         

        </div>
    );
};

export default AdEvents;