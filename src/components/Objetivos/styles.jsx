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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  width: 80%;
  max-width: 100vw;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.darkBg};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  min-height: 450px;

  & ${SubTitle} {
    color: white;
    margin-bottom: 30px;
  }

  & ${Paragraph} {
    color: white;
    margin-bottom: 30px;
  }
`;

export const Icon = styled.img`
  width: 30vh;
`;
