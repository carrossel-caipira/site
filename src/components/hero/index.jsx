import React from 'react';
import { HeroS, RobotImg, DivMeio, Texto } from './styles';
import Navbar from '../navbar/index';
import imagem from '../../assets/images/robozin.png';
import titulohero from '../../assets/images/titulo_hero.svg';
import History from '../history/index';
import Group from '../group/index';
import Footer from '../footer/index';

function Hero() {
    return (
        <HeroS>
          <Navbar />
          <DivMeio>
          <RobotImg src={imagem} alt="robo carrossel"/>
          <Texto src={titulohero} alt="titulo hero"/>
          </DivMeio>

        </HeroS>
    );
}

export default Hero;
