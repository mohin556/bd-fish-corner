import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import test from "../../Image/bottom-view-tasty-fish-fry-lemon-slices-cut-cherry-tomatoes-plate-dried-flower-branch-wooden-spoon-black-table_140725-112153.jpg";
import salmon from "../../Image/salmon.PNG";
import tuna from "../../Image/fried.jpg";
import coral from "../../Image/Coral.PNG";
import './FeaturedItem.css'
import Items from './Items/Items';
import OderDetails from './../OderDetails/OderDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from './../firebase.init';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FeaturedItem = () => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const [items,setItems] = useState([]);
    

   useEffect(()=>{
       fetch('http://localhost:5000/services')
       .then(res =>res.json())
       .then (item => setItems(item))
   },[])


    return (
        <div id="features" className='featured' >
               <Container className="headingg">
                <Row>
                     <Col>
                        <h3 className='text-center'>FEATURED ITEMS</h3>
                     </Col>
               </Row>
                 </Container> 
                 <div className="cardd row">
                  
                   
                   {
                       items.map( item => <Items
                           item={item} key={item._id } 
                       
                       />
            
                       )
                   }


                  </div> 
        </div>
    );
};

export default FeaturedItem;