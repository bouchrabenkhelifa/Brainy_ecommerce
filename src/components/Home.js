import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./home.css";
import logo from "./hero_image.png";
import prop from "./prop.jpg";
import pic1 from "./piic1.jpg";
import  pic2 from "./piic2.jpg";
import  pic3 from "./piic3.jpg";
import  pic4 from "./piic4.jpg";
import vid from "./vid.mp4";
function Home() {
    return(
<div>
<div class="hero" id="home">
<div class="video"> <video width="640" height="360" controls>
        <source src={vid} type="video/mp4" />
      </video></div>
      <div class="container">
        <div class="left_side">
          <p class="lhedda">
            here is where you can exactly get what you need from your place
          </p>
          <h1>
            Discover a haven of high quality <span>services</span> &
            <span>products</span>
          </h1>
          <p>
            brainy store is a place that makes shopping more simple , quick and
            comfortable
        
          </p>
        
        </div>
       
      </div>
    </div>

    <div class="about" id="about">
      <div class="main-heading">
        <h2>About Us</h2>
        
      </div>
      <div class="container">
        <div class="container">
          <div class="left_side">
            <p>
            <p>what is barainyStore !!!</p>
              Welcome to Brainy Store, where intellect meets style! At Brainy
              Store, we are passionate about merging the realms of brilliance
              and fashion, offering a curated collection of swag items that
              celebrate the smart and the savvy.
            </p>
          </div>
          <img src={logo}  className="about_img" />
        </div>
      </div>
    </div>
 
    <div class="propositions">
        <div class="main-heading">
          <h2>Propositions</h2>
          <p>Get your first quick view here!!!</p>
        </div>
        <section class="horizontal-scroll-section">
          <div class="scroll-container">
          <Link to="/details"><img src={prop}/> </Link>
          <Link to="/details"><img src={pic1}/> </Link>
          <Link to="/details"><img src={pic2}/> </Link>
          <Link to="/details"><img src={pic3}/> </Link>
            <img src={pic4} alt="Image 1" />
          </div>
        </section>
    </div>
</div>
);
}
export default Home