import styled from "styled-components";
import Title from "../Title/";
import Paragraph from "../Paragraph/";
import React, { useEffect, useRef } from "react";
import SubTitle from "../SubTitle";

export const Hist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: auto;
  gap: 70px;
  padding: 0 6.25em;
  margin-bottom: ${(props) => props.theme.margin_sections};
  @media (max-width: 1350px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 34rem; /* Exemplo */
    height: auto;

    @media (max-width: 716px){
    width: 650px;
    }

    @media (max-width: 660px){
    width: 530px;
    }

    @media (max-width: 539px){
    width: 450px;
    }

    @media (max-width: 469px){
    width: 420px;
    }
  }
`;

export const Left = styled.div`
  flex: 1;
  display: block;
  justify-content: center;
  align-items: center;
`;

export const TitleR = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  & ${Title} {
    font-weight: 600;
    color: #a04ccc;

    @media (max-width: 650px) {

    font-size: 7rem;

    }

    @media (max-width: 450px) {

    font-size: 6rem;

    }
    @media (max-width: 380px) {

    font-size: 5rem;

    }
  }
`;

export const Text = styled.div`
  width: 100%;

  & ${Paragraph} {
    font-size: 1.35rem;

    @media (max-width: 600px) {
      font-size: 1.3rem;
    }

    @media (max-width: 380px) {
      font-size: 1.1rem;
    }
  }

  & ${SubTitle} {
    color: ${(props) => props.theme.darkBg};
    margin-bottom: 1rem;

    @media (max-width: 500px) {
      font-size: 1.8rem;
    }

  }
`;

//CARROSSEL VERTICAL

export const CarouselContainer = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;

  padding: 0 5px;
  opacity: 0;
  filter: drop-shadow(0 2px 2px #555);
  will-change: transform, opacity;
  animation: carousel-animate-vertical 27s linear infinite;
  animation-delay: calc(3s * (var(--index) - 2));
`;

export const ItemBody = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 8px 10px;
`;

export const TitleC = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  margin-top: 10px;
`;

export const CarouselWrapper = styled.div`
  @keyframes carousel-animate-vertical {
    0% {
      translate: 0 100%;
      scale: 0.6;
      opacity: 0;
      visibility: hidden;
    }
    3%,
    11% {
      translate: 0 100%;
      scale: 0.8;
      opacity: 0.4;
      visibility: visible;
    }
    14%,
    22% {
      translate: 0 0;
      scale: 0.9;
      opacity: 1;
      visibility: visible;
    }
    25%,
    33% {
      translate: 0 -100%;
      scale: 0.8;
      opacity: 0.4;
      visibility: visible;
    }
    36% {
      translate: 0 -100%;
      scale: 0.6;
      opacity: 0;
      visibility: visible;
    }
    100% {
      translate: 0 -100%;
      scale: 0.6;
      opacity: 0;
      visibility: hidden;
    }
  }
`;
