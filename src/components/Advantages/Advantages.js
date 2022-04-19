import React from 'react';
import Advanture from '../Advanture/Advanture';
import image from '../../Image/bottom-view-tasty-fish-fry-lemon-slices-cut-cherry-tomatoes-plate-dried-flower-branch-wooden-spoon-black-table_140725-112153.jpg';
import './Advantages.css';
const Advantages = () => {
   const text ="shdjahjks sahjkdhksajd shajlkdhjklsa"



    return (
        <div className='advantages' >
             {/* <div className="ad-image"></div>
             <div className="ad-text"></div> */}

           <Advanture img={image} text ={text}  />


        </div>
    );
};

export default Advantages;