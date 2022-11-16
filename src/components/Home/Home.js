import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import slide1 from '../../Image/BannnerrNew.PNG';
import slide2 from '../../Image/slider666.PNG';
import slide3 from '../../Image/bannertst1.jpg';
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
    return (
        < >
            <Carousel  >
  <Carousel.Item  >
     <div  >
     
      <img
          className="d-block w-100 caroImg"
          src={slide3}
          alt="First slide"
        />
            <Container>
              <Row>
                <Col>
                 <Carousel.Caption className='text-ryt   ' >
                 <h3 className='home-heading' >Wellcome </h3>
                  <h2 className='home-heading' >2</h2>
                  <h4>BD-FISH-CORNER</h4>
          
                 </Carousel.Caption>
                 </Col>
               </Row>
            </Container>
      
      
    
     </div>

 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caroImg"
      src={slide2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='slider2'>THE WONDERS OF THE OCEANS</h3>
      <p className='slider2'>ON YOUR PLATE</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 caroImg"
      src={slide1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>THE PLACE TO BE FOR SEAFOOD</h3>
      <p>AT THE RESTURANT</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


      
        </>
    );
};

export default Home;