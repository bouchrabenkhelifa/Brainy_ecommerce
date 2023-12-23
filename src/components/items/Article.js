import React, { useState, useEffect } from 'react';
import "./article.css";
import heart from './Vector.png'
import item from './ITEM.jpg'
import pic from './pic.jpg'
import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
const Artilce = () => {
    return(  
       
        <div className='gridd'>

           
            <div className='article'>
            <Link to="/details"><img src={item}/> </Link>
            </div>

            <div className='article'>
            <Link to="/details"><img src={pic}/> </Link> 
            </div> 
           
            <div className='article'>
            <Link to="/details"><img src={pic}/> </Link>
            </div> 
           
            <div className='article'>
            <img src={pic}/> 
            </div>
            <div className='article'>
            <Link to="/details"><img src={item}/> </Link>
            </div> 
           
            <div className='article'>
            <Link to="/details"><img src={item}/> </Link>
            </div>
             
            </div> 
          

   
    );
}
export default Artilce