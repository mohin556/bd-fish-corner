import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../../Image/fish6.PNG';
import image2 from '../../Image/fishcary2.jpg';
import image3 from '../../Image/fishCary.jpg';
import image4 from '../../Image/carry33.PNG';
import image5 from '../../Image/curry44.PNG';
import image6 from '../../Image/fish6.PNG';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Container id='footer' className='footer-container'>
    
            <section className='F-last'>
              <Container className='f-row'>
              <Row className='footer-left'  >
                <Col className='text-muted' > <h5>Contact Us</h5>
                 <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h6>Address: 123 Road Dhaka</h6>  
                <h6>Phone: 01711111</h6>
                <h6>E-mail: dhaka@gmail.com</h6> 
                <h6>Opening: 9:05am to 10:00pm</h6>
        
        
              </Col>
        <Col className='text-muted'> <h5> INFORMATION </h5>
         <br />
         <h6>About Us</h6>
         <h6>Legal Notice</h6>
         <h6>Adress</h6>
         <h6>Orders</h6>
         <h6>Payment</h6>
         <h6>Suppliers</h6>
        
      
        </Col>
        <Col className='text-muted'> <h5>MY ACCOUNT </h5>
         <br />
         <h6>Delivery</h6>
         <h6>Legal Notice</h6>
         <h6>Price Drop</h6>
         <h6>New Products</h6>
         <h6>Best sales</h6>
         <h6>Return policy</h6>
         
      
        </Col>
   
        <Col> <h5 className='mb-3'> INSTAGRAM </h5>
        
     <div className='footer-img'>
         <img src={image1} alt="" />

         <img src={image2} alt="" />
          <img src={image3} alt="" />
        
     </div>
        <div className='footer-img'>
         <img src={image4} alt="" />

         <img src={image5} alt="" />
          <img src={image1} alt="" />
        
       </div>
         
      
           </Col>
        </Row>
           
              </Container>
              <Container>
            
              <Col className='footer-lastt'>
               <div className='mt-4'>
                <h5> REGISTRATION</h5>
                 <p>
                    Subscribe to our latest News
                  </p>
                </div>
                <div className='footer-input'>
                   <input type="text" placeholder='Your email address' />
                   <button className='btn btn-success'>Subscribe</button>
                </div>
                <div className='social-icon'>
                   <h5>FOLLOW US</h5>
                  <div>
                   <FacebookIcon/>
                   <TwitterIcon/>
                   < GoogleIcon/>
                   <InstagramIcon/>
                  </div>
                </div>
              
              </Col>
             
              
          </Container>
            </section>
            
        </Container>
    );
};

export default Footer;