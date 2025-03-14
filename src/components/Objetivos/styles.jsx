import styled from "styled-components";
import Title from "../Title/";
import SubTitle from "../SubTitle";
import Paragraph from "../Paragraph";
import backzao from "../../assets/images/hero_back.svg";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  width: 100vw;
  margin-top: 15vw;
  background-color: white;
  padding: 60px 20px;
  text-align: center;

  & ${Title} {
    margin-bottom: 100px;
    background-image: url(${backzao});
    background-size: cover;
    background-position: center;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  width: 80%;
  max-width: 100vw;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    gap: 85px;
    align-items: center;
  }
`;


export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.darkBg};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  min-height: 460px;

  @media (max-width: 950px) {
    min-height: auto;
    padding: 30px;
  }

  & ${SubTitle} {
    color: white;
    margin-bottom: ${props => props.theme.margin_xl};
    height: .85em;
  }

  & ${Paragraph} {
    color: white;
    margin-bottom: 30px;
  }
`;


export const Icon = styled.img`
  margin-top: 5px;
  width: 20vh;
  max-width: 70%;
  height: auto;
`;

