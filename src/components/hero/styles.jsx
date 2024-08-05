import styled, { keyframes } from 'styled-components';
import backzao from '../../assets/images/hero_back.svg';
import { Link } from 'react-scroll';

export const HeroS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
  align-items: center;
  gap: 10vw;
  height: 65vh;

  @media(max-width: ${props => props.theme.deviceMobile}) {
    height: auto;
    flex-direction: column;
    gap: 5vh;
  }
`;

export const RobotImg = styled.img`
  max-height: 100%;
  width: min(32vw, 65vh);
  aspect-ratio: 1;

  @media(max-width: ${props => props.theme.deviceMobile}) {
    width: 80vw;
  }
`;

export const Texto = styled.img`
  max-width: 1200px;
  width: 40vw;

  @media(max-width: ${props => props.theme.deviceMobile}) {
    width: 80vw;
  }
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
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Botaoimg = styled.img`
  max-width: 60px;
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
  max-width: 40px;
  width: 2vw;
  margin-block: 5vh;

  @media(max-width: ${props => props.theme.deviceMobile}) {
    width: 10vh;
  }
`;
