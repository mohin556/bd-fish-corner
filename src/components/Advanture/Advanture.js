import React from 'react';
import './Advanture.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Advanture = ({advantage}) => {
      const {Name,description,image,id } = advantage
      console.log(advantage._id)
      const navigate = useNavigate();
      const handleDetail =(id) =>{
        navigate(`/advantage/${advantage._id}`)
      }

    return (
        <div className='  advanture col-sm-12 col-md-6 col-lg-3 ' >
        
        <div onClick={()=>handleDetail(`/detail/${advantage._id}`)}   class="card " style={{ width: "18rem"}}>
          <div>
               <img src={image} class="card-img-top" alt="..."/>
       
           <div class=" card-extra card-body">
              <h4 className='card-title' >{Name}</h4>
             <p class="card-text">{description}</p>
    
          </div>
          </div>
         </div>
        
        </div>
    );
};

export default Advanture;