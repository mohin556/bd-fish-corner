import React from 'react';
import fish1 from '../../Image/bottom-view-tasty-fish-fry-lemon-slices-cut-cherry-tomatoes-plate-dried-flower-branch-wooden-spoon-black-table_140725-112153.jpg';
import FishPhoto from '../FishPhoto/FishPhoto';
import './FishImage.css'
const FishImage = () => {
    const fishImg =[
        {
            img : fish1,
            name : "PRODUCT"
        },
        {
            img : fish1,
            name : "PRODUCT"
        },
        {
            img : fish1,
            name : "PRODUCT"
        },
        {
            img : fish1,
            name : "PRODUCT"
        }
    ]


    return (
        <div  className='fish-imgg' >
            <p>Just test my self</p>
              <div className='fish-img'>
              {
                   fishImg.map(fish =>
                    <FishPhoto img={fish.img} name = {fish.name} />
                    )
               } 
              </div>
        </div>
    );
};

export default FishImage;