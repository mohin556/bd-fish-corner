import React from 'react';
import './Advanture.css';
const Advanture = ({img,text}) => {
    return (
        <div>
            <img src={img} alt="" />
            <h1> {text} </h1>
        </div>
    );
};

export default Advanture;