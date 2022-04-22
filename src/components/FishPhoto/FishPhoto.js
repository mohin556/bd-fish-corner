import React from 'react';
import './FishPhoto.css'
const FishPhoto = ({img,name}) => {
  
    return (
        <div className='fish-photo'>
           <div className='f-imgDuv' >
               <img className="f-image" src={img} alt="" />
             
           </div>
           <div className="f-name">
               <h3>{name}</h3>
           </div>
        </div>
    );
};

export default FishPhoto;