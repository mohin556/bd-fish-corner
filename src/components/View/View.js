import React, { useEffect, useState } from 'react';
import './View.css';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';

const View = () => {
    const {id} = useParams();
   const [view,setView] = useState({});
   useEffect((()=>{
    const url = `http://localhost:5000/services/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => setView(data))
   }

   ),[])


    return (
        <Container className='view-details'>
       
        <Card className='view-card' style={{ width: '25rem' }}>
      <Card.Img style={{ width: '25rem' }}  variant="top" src={view.image} />
      <Card.Title>{view.Name}</Card.Title>
      <Card.Text class="text-justify" >
         {view.description}
        </Card.Text>
        <Link to="/total" class="btn btn-primary mr-2" > BACK </Link>
       
    </Card>
      
      </Container>
    );
};

export default View;