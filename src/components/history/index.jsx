import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Hist, CarrosselStyles } from './styles.jsx'
import imgCarrossel from '../../assets/images/equipe_carrossel.png'
import reuniao from '../../assets/images/reuniao.png'
import reuniao2 from '../../assets/images/reuniao2.png'
import robo from '../../assets/images/robo.png'
import img2 from '../../assets/images/robo_carrosel.svg'
import geral from '../../assets/images/geral.jpg'
import tres from '../../assets/images/vini luci mu.jpg'
import andando from '../../assets/images/andando.jpg'
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
      <Title>HISTORIA</Title>
      <Carrossel>
        <img src={robo} alt="time carrossel"/>
        <img src={reuniao2} alt="time carrossel"/>
        <img src={imgCarrossel} alt="time carrossel"/>
        <img src={reuniao} alt="time carrossel"/>
        <img src={reuniao} alt="time carrossel"/>
        <img src={reuniao} alt="time carrossel"/>
        <img src={reuniao} alt="time carrossel"/>
        <img src={reuniao} alt="time carrossel"/>
        <img src={andando} alt="time carrossel"/>
        <img src={tres} alt="time carrossel"/>
        <img src={geral} alt="time carrossel"/>
      </Carrossel>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Paragraph>
    </Hist>
  )
}

export default History
