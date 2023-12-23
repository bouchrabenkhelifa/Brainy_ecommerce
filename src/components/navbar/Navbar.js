import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./navbar.css";
import menu from "./list.png";
import cart from "./cart.png";
import logo from "./logo.png";

function Navbar() {

    const closeNavbar = () => {
      setOpenLinks(false);
    };
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };


  return (
    <div className="alll">
      <div className="intro">
        <div className="navbar">
        <img id="logo" src={logo} />
          <div className="leftSide" id={openLinks ? "open" : "close"}>
            <div className="hiddenLinks" data-aos="fade-right">
              <button onClick={closeNavbar}>
                <span className="close-button">X</span>
              </button>
          <Link onClick={closeNavbar} to="/">Home</Link>
          <Link onClick={closeNavbar} to="contact">Contact</Link>
          <Link onClick={closeNavbar}  to="/items">Items</Link>
          <Link onClick={closeNavbar}  to="/cart"> Cart </Link>
          </div></div>  
          <button onClick={toggleNavbar}>
            <img id="list" src={menu} />
          </button>
          <div className="rightSide">
        
          <Link to="/">Home</Link>
          <Link to="/items">Items</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart"> Cart </Link>
          
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;