import React from 'react'
import { useState } from 'react'
import { Hist, CarrosselStyles } from './styles.jsx'
import imgCarrossel from '../../assets/images/equipe_carrossel.png'
import Title from '../Title/'
import Paragraph from '../Paragraph/'

function Carrossel(props) {
  return (
    <CarrosselStyles>
      ${props.children}
    </CarrosselStyles>
  )
}

function History(){
  return (
    <Hist>
      <Title>HISTORIA</Title>
      <Carrossel>
        <img src={imgCarrossel} alt="time carrossel"/>
        <img src={imgCarrossel} alt="time carrossel"/>
        <img src={imgCarrossel} alt="time carrossel"/>
      </Carrossel>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
    </Hist>
  )
}

export default History
