import React, { useEffect } from "react";
import "./details.css";
import item from "./item.png";
import cart from "./cart.png";
function Details() {
return(

    <div className="itemm"> 
    
     <img className="image"  src={item} /> 
     <div className="flex1">
     <p>  product details Material composition Material: Cotton and Polyester, 
        The fabric of this dress is stretchy, soft and warm. Comfortable to touch
         and wear. Care Instructions Dear, please check our size chart to suit you
          before ordering. The size measurements provided in the
         photos are Asian sizes, please choose according to your body data</p>
         <div className="flexx"><div className="color1">    </div>    < div className="color2"> </div>  <div className="color3">   </div>   </div>
         <div className="flexx"><div className="M">   M </div>    < div className="l">L</div> <div className="xl">  XL </div>   </div>
         <div className="flexx"><button className="btn"> Add to cart  <img className="img"  src={cart} /> </button>  </div>
       
       </div>
     
     </div>  
    


);
}
export default Details