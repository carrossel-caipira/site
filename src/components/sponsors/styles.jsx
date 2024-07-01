import styled from "styled-components";
import Title from '../Title';

// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
export const Patrocinadores = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.lightBg};
  position: relative;
  z-index: -2;

  & ${Title} {
    color: ${props => props.theme.titleColor2};
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }

`;

export const StainTop = styled.img`
  position: absolute;
  right: -20vw;
  top: -40%;
  width: 40vw;
  background-size: contain;
  z-index: -1;
`;

/*
  @media (max-width: 768px) {
    width: 10vh;
  }

  @media (max-width: 480px) {
    width: 8vh;
  }
`;
*/

export const StainBottom = styled.img`
  position: absolute;
  left: -15vw;
  bottom: -70%;
  width: 30vw;
  z-index: -1;
`;

/*
  @media (max-width: 768px) {
    width: 10vh;
  }

  @media (max-width: 480px) {
    width: 8vh;
  }
`;
*/

export const MainImage = styled.img`
  max-width: 600px;
  margin-bottom: ${props => props.theme.margin_l};

  @media (max-width: 1024px) {
    max-width: 400px;
    align-items: center;
  }

  @media (max-width: 768px) {
    max-width: 200px;
    margin-bottom: ${props => props.theme.margin_m};
    align-items: center;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin-bottom: ${props => props.theme.margin_s};
    align-items: center;
  }
`;
