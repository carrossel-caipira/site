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
  background-color: white;
  padding-right:50px;
  padding-left:45px;
  text-align: center;
  margin-top:100px;

  & ${Title} {
    color: ${(props) => props.theme.darkBg};
    font-weight: 800;
    letter-spacing: 0.1px;
    font-size: 8rem;

    @media (max-width: 550px) {
    font-size: 5.8rem;
    }
}


`;

export const GridContainer = styled.div`
  margin-top: -30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  gap: 55px;
  width: 100%;
  max-width: 100vw;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 85px;
    align-items: center;
  }

  @media (max-width: 425px) {
    margin-right:30px;
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
    height: 0.85em;
    text-align: center;
    letter-spacing: 1px;
  }
`;
export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  background-color: white;
  width: auto;
  padding: 20px;
  border-radius: 35px;
  display: flex;
  margin-top: 1.19em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;

  & ${Paragraph} {

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
