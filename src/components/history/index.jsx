import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Hist, CarrosselStyles } from './styles.jsx'
import imgCarrossel from '../../assets/images/equipe_carrossel.png'
import VC1 from '../../assets/images/visitaCalouros.jpg'
import VC2 from '../../assets/images/visitaCalouros2.jpg'
import VC3 from '../../assets/images/visitaCalouros3.jpg'
import robos from '../../assets/images/robos.jpg'
import robos2 from '../../assets/images/robos2.jpg'
import documento from '../../assets/images/documento-campeao.jpeg'
import roboBandeira from '../../assets/images/robo-bandeira.jpg'
import trofeus from '../../assets/images/trofeus.jpg'
import reuniao from '../../assets/images/reuniao.png'
import reuniao2 from '../../assets/images/reuniao2.png'
import robo from '../../assets/images/robo.png'
import geral from '../../assets/images/geral.jpg'
import tres from '../../assets/images/vini luci mu.jpg'
import Title from '../Title/'
import Paragraph from '../Paragraph/'

const numImages = 3;
const switchTime = 5; // in seconds
const transitionTime = .75;
const gap = 10; // px

function mod(n, m) {
  return ((n % m) + m) % m;
}

function getElRect(el) {
  let promise = new Promise((res, rej) => {
    let rect = el.getBoundingClientRect();
    if (rect.width) res(rect);

    else {
      el.onload = () => res(el.getBoundingClientRect());
    }
  });

  return promise;
}

function transitionLeft(el, px) {
  el.style.left = px + "px";
}

function snapLeft(el, px) {
  const currentTrasition = el.style.transition;

  el.style.transition = "none";
  el.style.left = px + "px";

  el.offsetHeight; // reading this flushes the css applying the changes imediatly

  el.style.transition = currentTrasition;
}

function Carrossel(props) {
  const [displayedIndex, setIndex] = useState(0);

  const containerRef = useRef(null);
  useEffect(() => {(async () => {

    const children = Array.from(containerRef.current.children);
    const containerRect = await getElRect(containerRef.current);

    const centeredElRect = await getElRect(children[displayedIndex]);
    const bodyRect = document.body.getBoundingClientRect();

    // how much to move every element to cernter target el
    const delta = (bodyRect.width - centeredElRect.width)/2 - centeredElRect.x;

    // wrapping elements outside the carroussel
    let leftWrap = 0;
    for (const el of children) {
      const elRect = await getElRect(el);
      leftWrap -= gap + elRect.width;
    }

    for (const el of children) {
      const elRect = await getElRect(el);

      // right
      if (elRect.x > containerRect.x + containerRect.width) {
        const left = (parseInt(el.style.left) || 0) + leftWrap;
        // wrap
        snapLeft(el, left);
      }

      // transition all elements
      transitionLeft(el, (parseInt(el.style.left) || 0) + delta);
    }

  })()}, [displayedIndex, containerRef]);

  // advance carroussel on timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(displayedIndex => mod(displayedIndex - 1, props.children.length));
    }, switchTime * 1000);

    return () => clearInterval(timer)
  }, [])

  return (
    <CarrosselStyles ref={containerRef}>
      {props.children}
    </CarrosselStyles>
  )
}

function History(){
  return (
    <Hist className="historia">
      <Title>HISTÓRIA</Title>
      <Carrossel>
        <img src={robo} alt="time carrossel"/>
        <img src={reuniao2} alt="time carrossel"/>
        <img src={geral} alt="time carrossel"/>
        <img src={imgCarrossel} alt="time carrossel"/>
        <img src={reuniao} alt="time carrossel"/>
        <img src={trofeus} alt="trofeus do carrossel"/>
        <img src={VC1} alt="Visita dos calouros 2025"/>
        <img src={geral} alt="time carrossel"/>
        <img src={roboBandeira} alt="robo bandeira"/>
        <img src={robos2} alt="robo vss"/>
        <img src={VC2} alt="Visita dos calouros 2025"/>
        <img src={VC3} alt="Visita dos calouros 2025"/>
        <img src={documento} alt="Documento Carrossel Campeao 1998"/>
        <img src={robos2} alt="robo vss"/>
        <img src={robos2} alt="robo vss"/>
        <img src={robos} alt="robo vss"/>
        <img src={tres} alt="time carrossel"/>
        <img src={tres} alt="time carrossel"/>
        <img src={geral} alt="time carrossel"/>
      </Carrossel>
      <Paragraph> A equipe foi criada em 1997 pelo professor Renê Pegoraro com intuito de fomentar o ensino de róbotica aplicada nas faculdades, garantindo segundo lugar na competição mundial de Mirosot em 1998 na França. Mantido pelos professores e alunos da instuição desde então, a equipe continua o ensino, pesquisa e aplicação de Robótica e Inteligência Artificial na Unesp participando nas competições subsequentes. </Paragraph>
    </Hist>
  )
}

export default History
