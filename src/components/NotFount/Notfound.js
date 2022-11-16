import React from 'react';
import './NotFound.css'
import NotF from "../../Image/NotF2.PNG";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Notfound = () => {
    return (
        <div className='notfound' >
          <Container fluid >
            <Row>
               <Col  ><h2 className='text-danger'>Not Found page </h2>
               <img src={NotF} alt="" responsive />
               </Col>
            </Row>
          </Container>

        </div>
    );
};

export default Notfound;