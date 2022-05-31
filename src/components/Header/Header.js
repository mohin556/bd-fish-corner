import React from 'react';
import './Header.css';
import Navbar from './../Navbar/Navbar';
import Home from './../Home/Home';
import FeaturedItem from './../FeaturedItem/FeaturedItem';
import Advantages from './../Advantages/Advantages';
import FishImage from './../FishImage/FishImage';
import DiscountOffer from './../DiscountOffer/DiscountOffer';
const Header = () => {
    return (
        <div>
             <Navbar/>
             <div>
                <Home />
             </div>
             
             <FeaturedItem />
              <Advantages />
           <FishImage />
            <DiscountOffer />
            
        </div>
    );
};

export default Header;