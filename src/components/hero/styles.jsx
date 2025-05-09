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
  font-size: 7.5rem;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 7.5%;
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

export const LogoBottom = styled.img`
  display: inline-block;
  width: 35vw;
  aspect-ratio: 1;

  position: relative;
  top: calc(87.5vh - 17.5vw);
  left: calc(70vw - 17.5vw);

  animation: ${bobAnimation} 10s infinite alternate;
`;

