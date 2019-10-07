import React, { Component } from 'react';
import MenuCentral from './menuCentral.js'
import CarouselComponent from './carousel.js'
import Noticiero from './noticiero.js'
import Enlaces from './enlaces.js'
import Footer from './footer.js'

import './styles/landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="div-principalLanding">
        <MenuCentral/>
        <CarouselComponent/>
        <Noticiero/>
        <Enlaces/>
        <Footer/>
      </div>
    );
  }
}

export default Landing;
