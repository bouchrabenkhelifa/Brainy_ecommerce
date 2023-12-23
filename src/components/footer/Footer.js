import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './footer.css'
import  fb from "./fb.png";
import  email from "./email.png";
import  insta from "./insta.png";

function Footer() {
    useEffect(()=> {
        AOS.init({duration:2000});
    },[]
    );
  return (
    <div className='all'> 
    <div className='footer'>
    <div className="grid">
           <h3>Categories</h3>
      <div className="item">man </div>
      <div className="item">woman </div>
      <div className="item"> children</div>
    </div>
    <div className="grid">
             <h3>Discounts</h3>
      <div className="item">black friday </div>
      <div className="item"> Ramadan's offers </div>
      <div className="item"> Ramadan's offers </div>
     
    </div>
    <div className="grid">
             <h3>Discounts</h3>
      <div className="item">black friday </div>
      <div className="item"> Ramadan's offers </div>
      <div className="item"> Ramadan's offers </div>
     
    </div>
    </div>
   
    <div className="grid1">
    <h3>Contact</h3>
    <div className="div"><img id="image"  src={fb} />  <img id="image" src={insta} />  <img id="image"  src={email} />
  </div></div>
  </div>

  )
}

export default Footer