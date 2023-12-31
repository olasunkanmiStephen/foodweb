import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Gallery from './Components/Gallery/Gallery';
import Review from './Components/Review/Review';
import Order from './Components/Order/Order';
import Team from './Components/Team/Team';
import Footer from './Components/Footer/Footer';

function App() {
  const handleNavbarClick = () => {
    // Implement the desired behavior for Navbar click
    console.log('Navbar clicked');
  };

  return (
    <>
      <Navbar onClick={handleNavbarClick} />
      <Home />
      <About />
      <Menu />
      <Gallery />
      <Review />
      <Order />
      <Team />
      <Footer />
    </>
  );
}

export default App;
