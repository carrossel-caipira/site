import React, { useState } from 'react';
import { HeroS, HeroClip, Title, LogoTop, LogoBottom } from './styles';
import Navbar from '../navbar/index.jsx';
import back from '../../assets/images/background2.png';
import logo from '../../assets/images/logo_gradiente.png';
import logoSpinni from '../../assets/images/variação_nome.png';


function Hero() {
  return (
    <><Navbar />
    <HeroS className='hero'>
      <HeroClip>
        <img src={back} alt="Background logo" />

        <Title>{`CARROSSEL\nCAIPIRA`}</Title>

        <LogoTop src={logoSpinni} alt="carrossel redondo"/>
        <LogoBottom src={logo} alt="logo carrossel"/>
      </HeroClip>
      <LogoBottom src={logo} alt="logo carrossel" style={{filter: "grayscale(1)", zIndex: "-2", opacity: "0.4"}}/>
    </HeroS>
    </>
  );
}

export default Hero;
