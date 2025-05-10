import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

export const HeroS = styled.div`
  width: 100vw;
  height: 100vh;

  font-family: Poppins;
  color: white;

  :first-child {
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100vh;
  }

  margin-bottom: ${props => props.theme.marginxxl} + 200px;
`;

export const HeroClip = styled.span`
  width: 100vw;
  height: 100vh;

  overflow: hidden;
`

export const Title = styled.h1`
  font-size: min(7.5rem, 12vw);

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 7.5%;
  z-index: 1;

  @media(max-width: 750px) {
    text-align: center;
    font-size: 15vw;
  }
`;

const bobAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  } 66.666% {
    transform: translateY(calc(-5% - 5px)) rotate(15deg);
  } 100% {
    transform: translateY(calc(2.5% + 2.5px)) rotate(0deg);
`

export const LogoTop = styled.img`
  animation: ${bobAnimation} 5s infinite alternate;

  position: absolute;
  top: 15vh;
  right: 7.5vw;
  width: 12.5vw;
`

const logoSize = "65"; // em vh

export const LogoBottom = styled.img`
  display: inline-block;
  width: ${logoSize}vh;
  aspect-ratio: 1;

  position: relative;
  top: calc(87.5vh - ${logoSize/2}vh);
  left: calc(70vw - ${logoSize/2}vh);

  animation: ${bobAnimation} 10s infinite alternate;

  /* @media(max-width: ${props => props.theme.deviceMobile}) { */
  @media(max-width: 750px) {
    width: 110vh;
    object-fit: cover;
    opacity: 0.3;
    top: 17.5vh;
    left: -5vw;
  }
`;

