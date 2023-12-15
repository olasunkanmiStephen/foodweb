import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

interface Props {
  // Remove 'onClick' if it's not used in this component
}

const Navbar: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleMenuItemClick = () => {
    // Close the menu when a menu item is clicked
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className={`ul ${isMenuOpen ? 'open' : 'hidden'}`}>
        {['Home', 'About', 'Menu', 'Gallery', 'Review', 'Order'].map((item) => (
          <li key={item}>
            <a href={`#${item}`} onClick={handleMenuItemClick}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="icon">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa fa-bars" id="bars" onClick={handleToggleMenu}></i>
      </div>
    </nav>
  );
};

export default Navbar;
