import React, { useState } from "react";
import '../Navbar/Navbar.css';
import logo from '../assets/logo.png';

interface Props {
  onClick: () => void;
}

function Navbar({ onClick }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className={`ul ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#Gallery">Gallery</a></li>
          <li><a href="#Review">Review</a></li>
          <li><a href="#Order">Order</a></li>
        </ul>

        <div className="icon">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa fa-bars" id="bars" onClick={handleToggleMenu}></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
