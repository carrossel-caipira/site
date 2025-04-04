import React, { useState } from 'react';
import { HeroS, RobotImg, DivMeio, Texto, Botaoimg, Linkz } from './styles';
import Navbar from '../navbar/index.jsx';
import imagem from '../../assets/images/robozin.png';
import titulohero from '../../assets/images/titulo_hero.svg';
import imgbutao from '../../assets/images/angles-down-solid.svg';
import backzao from '../../assets/images/background.svg';


function Hero() {
  const [clicked, setClicked] = useState(false);


  const handleClick = () => {
    setClicked(true);


    setTimeout(() => {
      setClicked(false);
    }, 300);
  };

  return (
    <HeroS className='hero'>
      <Navbar />
      <DivMeio >
        <Texto src={titulohero} alt="titulo hero" />
        <RobotImg src={imagem} alt="robo carrossel" />
      </DivMeio>
      <Linkz
        to="about-us"
        smooth={true}
        spy={true}
        offset={-130}
        duration={500}
      >
        <Botaoimg
          src={imgbutao}
          onClick={handleClick}
          className={clicked ? 'clicked' : ''}
        />

      </Linkz>
    </HeroS>
  );
}

export default Hero;
