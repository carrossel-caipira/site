import React, { useState } from 'react';
import { HeroS, HeroClip, Title, LogoTop, LogoBottom } from './styles';
import Navbar from '../navbar/index.jsx';
import back from '../../assets/images/background2.png';
import logo from '../../assets/images/logo_gradiente.png';
import logoSpinni from '../../assets/images/variação_nome.png';

function CircularText(props) {
  // add easier size customization

  const radius = 50;
  const viewBox = 150;

  const cp = `M ${viewBox * 0.5 - radius}, ${viewBox * 0.5}
        a ${radius},${radius} 0 1,1 ${radius * 2},0
        ${radius},${radius} 0 1,1 -${radius * 2},0
      `;

  return (
    <svg viewbox="0 0 100 100">
      <path id="circlePath" fill="none" stroke-width="4" stroke="hsl(0 100% 50% / 0.0)"
        d = {cp}/>

      <text whiteSpace="pre">
        <textPath href="#circlePath" textLength={Math.floor(Math.PI * 2 * radius)} whiteSpace="pre !important">{props.children}</textPath>
      </text>
    </svg>
  );
}

function Hero() {
  return (
    <><Navbar />
    <HeroS className='hero'>
      <HeroClip>
        <img src={back} alt="Background logo" />

        <Title>CARROSSEL<br/>CAIPIRA</Title>

        <LogoTop src={logoSpinni} alt="carrossel redondo"/>
        <LogoBottom src={logo} alt="logo carrossel"/>
      </HeroClip>
      <LogoBottom src={logo} alt="logo carrossel" style={{filter: "grayscale(1)", zIndex: "-2", opacity: "0.4"}}/>
    </HeroS>
    </>
  );
}

//      <LogoTop><img src={logoSpinni} alt="top right logo" /></LogoTop>
//      <CircularText>Carrossel Caipira • Carrossel Caipira • </CircularText>

export default Hero;
