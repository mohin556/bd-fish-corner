import React, { useEffect, useState } from 'react';
import Advanture from '../Advanture/Advanture';

const Advantages = () => {
   const [advantages,setAdvantage] = useState([]);

   useEffect(()=>{
      const url = `http://localhost:5000/advantage`;
      fetch(url)
      .then(res => res.json())
      .then(data => setAdvantage(data))

   },[])



    return (
        <div id="advantage" className='advantage' >
        
             <div className="advantage-heading ">
              <h4>about</h4>
              <h2>OUR ADVANTAGES</h2>

             </div>
           
            <div className="advantages row  ">

             {
                advantages.map( advantage => <Advanture advantage={advantage} key={advantage.id} ></Advanture>)
             }


            
            </div>
          

      
        </div>
    );
};

export default Advantages;