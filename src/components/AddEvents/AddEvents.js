import React from 'react';
import './AddEvents.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const AdEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
         <div className="admin">
          <div className="admin-left">
             
             <h4> helllow   </h4>
             <Link to='/add.'  > <h4>Add Events</h4></Link>

        </div>
          
         <div className="admin-right">
             {/* <h1>Admin page </h1> */}
             <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h3>Add Events</h3>
                </div>
      {/* register your input into the hook by invoking the "register" function */}
      <input className='input-frm' defaultValue="test" {...register("example")} />
     
      <input className='input-frm' defaultValue="test" placeholder='File' {...register("example")} />
      <br />

      <input className='input-frm' type="text" placeholder='Text' />
      <br />
     <br />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
         </div>
       




          </div>
       
         

        </div>
    );
};

export default AdEvents;