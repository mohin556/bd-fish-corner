import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Items.css'
import { Link } from 'react-router-dom';
const Items = ({item}) => {


  const {image,Name,} = item;
 

    return (
          <div className='item col-sm-12 col-md-6 col-lg-3'  >
        <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{Name}</Card.Title>
           <Card.Text className='text-danger font-weight-bold'>
         {item.price}$ 
        
         </Card.Text>
              <Link  to={`/services/${item._id}`}>
                 <Button variant="success">GET NOW!</Button>
              </Link> 
         </Card.Body>
         </Card>
          </div>
     
        
        
       
    );
};

export default Items;