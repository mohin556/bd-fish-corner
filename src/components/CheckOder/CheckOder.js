import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './CheckOder.css'

const CheckOder = () => {
    const {id} = useParams();
   const [select,setSelected] = useState({});

   useEffect((()=>{
    const url =`http://localhost:5000/lists/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => setSelected(data))
   }),[])

    return (
        <div className='text-left'>
            <h5>Id No : {id}</h5>
            <h6>Name : {select.name}</h6>
            <img src={select.image} style={{width: '24rem'}} alt="" />
            <p>{select.description}</p>
            
            <Link to="/lists" class="btn btn-success mr-2" > Go Back </Link>
        </div>
    );
};

export default CheckOder;