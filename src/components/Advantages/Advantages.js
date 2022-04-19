import React from 'react';
import Advanture from '../Advanture/Advanture';
import image from '../../Image/bottom-view-tasty-fish-fry-lemon-slices-cut-cherry-tomatoes-plate-dried-flower-branch-wooden-spoon-black-table_140725-112153.jpg';
import './Advantages.css';
const Advantages = () => {
   



    return (
        <div className='advantage' >
             {/* <div className="ad-image"></div>
             <div className="ad-text"></div> */}
             <div className="advantage-heading">
              <h4>about</h4>
              <h2>OUR ADVANTAGES</h2>

             </div>
           
            <div className="advantages">
            <Advanture img={image} text ={"Responsibly sourced"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusamus magni. Quod, iste quia! Esse accusantium facere laborum molestias ex?"}  />
           <Advanture img={image} text ={"Stuff"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusamus magni. Quod, iste quia! Esse accusantium facere laborum molestias ex?"}  />
           <Advanture img={image} text ={"Environment"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusamus magni. Quod, iste quia! Esse accusantium facere laborum molestias ex?"}  />
           <Advanture img={image} text ={"Market Place"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, accusamus magni. Quod, iste quia! Esse accusantium facere laborum molestias ex?"}  />
            </div>


        </div>
    );
};

export default Advantages;