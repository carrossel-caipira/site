import styled, { keyframes } from 'styled-components';
import backzao from '../../assets/images/hero_back.svg';
import { Link } from 'react-scroll';

export const HeroS = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-image: url(${backzao});
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

export const DivMeio = styled.div`
  display: flex;
  margin-top: 80px;
  align-items: center;
  margin-left: 123px;
  margin-right: 123px;
  height: 608px;
  position: relative;
`;

export const RobotImg = styled.img`
  max-width: 600px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const Texto = styled.img`
  max-width: 1200px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.7;
  }
`;

const arrowDownAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(5px) translateX(-50%);
  }
  100% {
    transform: translateY(0) translateX(-50%);
  }
`;

export const Botaoimg = styled.img`
  max-width: 60px;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: opacity 0.3s ease;
  animation: ${arrowDownAnimation} 2s infinite;

  &:hover {
    opacity: 0.7;
    animation-play-state: paused;
  }

  &.clicked {
    animation: ${fadeIn} 0.3s ease;
  }
`;

export const Linkz = styled(Link)`
  cursor: pointer;
`;
