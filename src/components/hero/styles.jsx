import styled from "styled-components";
import backzao from '../../assets/images/hero_back.svg';

export const HeroS = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url(${backzao});
  background-size: cover;
  background-position: center;

`;

export const DivMeio = styled.div`
  display: flex;
  margin-top: 180px;
  align-items: center;
  /* background-color: black; */
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


