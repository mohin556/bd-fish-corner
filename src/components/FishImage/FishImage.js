import React from 'react';
import fish1 from '../../Image/tunaLong.PNG';
import FishPhoto from '../../Image/longNew.PNG';
import fish3 from '../../Image/elish22.jpg';
import fish2 from '../../Image/Long.PNG';
import './FishImage.css'

const FishImage = () => {
 
  

    return (
        <section className='  main-Product '  >
       

          <div className='ui-card   '>

      <img className='imgg' src={fish1} alt="" />
      <div className="f-text">
        <h3>LEADER</h3>
        <p className='text-info'> Sea food </p>
  </div>

</div>

<div className='ui-card  '>

<img className='imgg' src={FishPhoto} alt="" />
  <div className="f-text">
    <h3>PARTNER</h3>
    <p className='text-info'> Sustainable </p>
  </div>

</div>

<div className=' ui-card  '>

<img className='imgg' src={fish2} alt="" />
<div className="f-text">
<h3>PRODUCT </h3>
<p className='text-info'>World class</p>
</div>

</div>

<div className='ui-card   '>

< img className='imgg' src={fish3} alt="" />
   <div className="f-text">
      <h3>QUALITY</h3>
      <p className='text-info'> Control </p>
    </div>

</div>

   
        </section>
    );
};

export default FishImage;