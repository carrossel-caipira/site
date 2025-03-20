import styled from "styled-components";
import Title from "../Title";
import SubTitle from "../SubTitle";
import Paragraph from "../Paragraph";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70vh;
  width: 100vw;
  margin-top: 12vw;
  background-color: white;
  padding: 60px 20px;
  text-align: center;

  & ${Title} {
    color: ${props => props.theme.darkBg};
    font-weight: 800;
    letter-spacing: 0.1px;
    font-size: 8rem;
    margin-bottom: 0px;
`;

export const GridContainer = styled.div`
  margin-top: -30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  width: 75%;
  max-width: 100vw;

  @media (max-width: 980px) {
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
  padding: 1em;
  border-radius: 35px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  min-height: 550px;

  @media (max-width: 980px) {
    min-height: auto;
    padding: 32px;
  }

  & ${SubTitle} {
    color: white;
    margin-bottom: ${props => props.theme.margin_l};
    height: .85em;
    text-align: center;
    letter-spacing: 1px;
  }


`;
export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: -23px;

`;

export const Box = styled.div`
    background-color: white;
  width: 90%;
  padding: 20px;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;

  & ${Paragraph} {
    color: ${(props) => props.theme.darkBg};
    text-align: left;
    margin: 0;
  }
`;


export const Icon = styled.img`
  margin-top: 16px;
  width: 20vh;
  max-width: 70%;
  height: auto;
`;
