import React from 'react';
import './DiscountOffer.css';
const DiscountOffer = () => {
    return (
        <div className='discount' >
                 
              <div className='discount-inside' >
              
                 <div className='discount-left'>
                      <h3>Discount</h3>
                      <h3>15%</h3>
                      <div className="blur"></div>
                 </div>
                 <div className="discount-right">
                     <div>
                         <h2>Weekly Special Offer</h2>
                         <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error rem maxime voluptate nam earum neque culpa quaerat!</h4>
                         <button> LEARN MORE </button>
                     </div>
                 </div>
              </div>
        </div>
    );
};

export default DiscountOffer;