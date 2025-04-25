import React, { useState } from 'react';
import { HeroS } from './styles';
import Navbar from '../navbar/index.jsx';
import back from '../../assets/images/provisorio2.png'

function Hero() {
  return (
    <HeroS className='hero'>
      <Navbar />
      <img src={back} alt="Background logo" />
    </HeroS>
  );
}
export default Hero;
