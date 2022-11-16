import React from 'react';
import './Header.css';
import Home from './../Home/Home';
import FeaturedItem from './../FeaturedItem/FeaturedItem';
import Advantages from './../Advantages/Advantages';
import FishImage from './../FishImage/FishImage';

import Navbarr from '../Navbarr/Navbarr';
import Footer from '../Footer/Footer';

const Header = () => {
    return (
        <div className='header'>
            <Navbarr />
              <Home />
              <FeaturedItem />
              <FishImage />
              <Advantages />
            <Footer></Footer>
            
        </div>
    );
};

export default Header;