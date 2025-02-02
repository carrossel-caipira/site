import styled from "styled-components";
import Title from "../Title";
import backzao from "../../assets/images/hero_back.svg";

export const Patrocinadores = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme.lightBg};
  position: relative;
  z-index: -2;
  margin-top: 15px;


  & ${Title} {
    // color: ${(props) => props.theme.darkBg};
    background-image: url(${backzao});
    background-size: cover;
    background-position: center;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: ${(props) => props.theme.margin_l};
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

export const StainTop = styled.img`
  position: relative;
  left: 52.5vw;
  transform: translateY(55%);
  width: 40vw;
  margin-top: -25vw;
  background-size: contain;
  z-index: -1;

  @media (max-width: ${(props) => props.theme.deviceMobile}) {
    left: 60vw;
  }
`;

export const StainBottom = styled.img`
  position: relative;
  left: -50vw;
  width: 30vw;
  bottom: 2vw;
  max-width: 600px;
  z-index: -1;
  // margin-bottom: calc(-30vw - 11.08723rem/2);
`;

export const MainImage = styled.img`
  width: 40vw;
  min-width: 450px;

  @media (max-width: ${(props) => props.theme.deviceMobile}) {
    width: 70vw;
  }
`;
