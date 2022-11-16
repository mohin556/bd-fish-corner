import React, { useEffect, useState } from 'react';
import './AdvantureDetails.css';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbarr from './../../Navbarr/Navbarr';


const AdvantureDetails = () => {
    const {id} = useParams();
   
    const [detail,setDetail] = useState({});
    console.log(detail)
    useEffect(()=>{
        const url = `http://localhost:5000/advantage/${id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setDetail(data))
    },[])
    
    return (
     <div className='det-div'>

           <Navbarr />
           <Container  >
           
             <Row className='main-container'>
           <Col><img className='d-img' src={detail.image} alt="" /></Col>
           <Col>   
                   <h2 className='text-danger '>{detail.Name}</h2>
                   <p className='text-primary' >{detail.description}</p>
          </Col>
          </Row>

            
          
             
           
         
        </Container>





     </div>
    );
};

export default AdvantureDetails;