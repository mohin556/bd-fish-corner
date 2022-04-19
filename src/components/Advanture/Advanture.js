import React from 'react';
import './Advanture.css';
const Advanture = ({img,text,description}) => {
    return (
        <div className='advanture' >
            <img className='advantage-image'  src={img} alt="" />
            <h3> {text} </h3>
            <h4>{description}</h4>
        </div>
    );
};

export default Advanture;