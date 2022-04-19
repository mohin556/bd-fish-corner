import React from 'react';
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
const FeaturedItem = () => {
    return (
        <div className='featured' >
             <div className="heading">
                 <h3>products</h3>
                 <h2>FEATURED ITEMS</h2>
                 </div> 
                 <div className="card">
                 <Card className='or-card' sx={{ maxWidth: 350 }}>
            <CardActionArea>
           <CardMedia
          component="img"
          height="300"
         
          image={test}
          img
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Salmon
          </Typography>
          <Typography variant="body2" color="text.secondary">
           $25.00
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card className='or-card' sx={{ maxWidth: 350 }}>
            <CardActionArea>
           <CardMedia
          component="img"
          height="300"
         
          image={salmon}
          img
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Salmon
          </Typography>
          <Typography variant="body2" color="text.secondary">
          $25.00
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    <Card className='or-card' sx={{ maxWidth: 350 }}>
            <CardActionArea>
           <CardMedia
          component="img"
          height="300"
         
          image={coral}
          img
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Coral
          </Typography>
          <Typography variant="body2" color="text.secondary">
          $22.00
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    <Card className='or-card' sx={{ maxWidth: 350 }}>
            <CardActionArea>
           <CardMedia
          component="img"
          height="300"
         
          image={tuna}
          img
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Tuna
          </Typography>
          <Typography variant="body2" color="text.secondary">
          $20.00
           extra
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>




                  </div> 
        </div>
    );
};

export default FeaturedItem;