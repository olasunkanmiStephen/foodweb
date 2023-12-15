import React from "react";
import '../Navbar/Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <>
      <nav>
                    <div className="logo">
                        <img src={logo} />
                    </div>
        
                    <ul className="ul">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Menu">Menu</a></li>
                        <li><a href="#Gallary">Gallary</a></li>
                        <li><a href="#Review">Review</a></li>
                        <li><a href="#Order">Order</a></li>
                    </ul>
        
                    <div className="icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <i className="fa-solid fa-heart"></i>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <i className="fa fa-bars" id="bars"></i>
                    </div>
        
                </nav>
    </>
  );
}

export default Navbar;
