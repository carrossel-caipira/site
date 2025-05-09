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
  text-align: center;
  Margin-top: 0px;
  margin-bottom: ${(props) => props.theme.margin_sections};

  width: 80%;
  align-self: center;

  & ${Title} {
    color: ${(props) => props.theme.darkBg};
    font-weight: 800;
    letter-spacing: 0.1px;

    font-size: 7.5rem;

    @media (max-width: 650px) {

    font-size: 7rem;

    }

    @media (max-width: 500px) {

    font-size: 5.8rem;

    }
    @media (max-width: 380px) {

    font-size: 4.5rem;

    }
}


`;

export const GridContainer = styled.div`
  margin-top: 17px;
  margin-bottom: 17px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  gap: 40px;
  width: calc(100% - 100px)
  max-width: 100vw;


  @media (max-width: 1184px) {
    grid-template-columns: 1fr;
    gap: 85px;
    align-items: center;
  }

  @media (max-width: 500px) {
    // margin-right:35px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.darkBg};
  padding: 1.5em;
  border-radius: 35px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  min-height: 400px;

  @media (max-width: 980px) {
    min-height: auto;
    padding: 32px;
  }

  & ${SubTitle} {

    color: white;
    height: 0.85em;
    text-align: center;
    letter-spacing: 1px;

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
  margin-top: 2.8rem;
  flex-direction: column;
  align-items: center;

  height: 100%;

  & ${Paragraph} {
    font-size: 1.05rem; /* larp */
    text-align: left;
    margin: 0;
  }
`;

/*
  @media (max-width: 1780px) {
    font-size: 3rem;
  }

  @media (max-width: 1680px) {
    font-size: 2.7rem;
  }

  @media (max-width: 1500px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1430px) {
    font-size: 2.3rem;
  }

  @media (min-width: 1185px) and (max-width: 1310px) {
    font-size: 2rem;
  }

  @media (min-width: 750px) and (max-width: 1184px) {
    font-size: 4rem;
  }

  @media (min-width: 550px) and (max-width: 750px) {
    font-size: 3.3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 380px) {
    font-size: 1.8rem;
  }
  }
*/

export const Icon = styled.img`
  margin-top: 16px;
  width: 100vh;
  max-width: 65%;
  height: auto;

  @media (max-width: 1800px) {
    font-size: 2.8rem;
  }

  @media (max-width: 1600px) {
    font-size: 2.4rem;
  }

  @media (max-width: 1570px) {
    font-size: 2.2rem;
  }

  @media (max-width: 1400px) {
    font-size: 2.1rem;
  }

  @media (max-width: 1250px) {
    font-size: 2rem;
  }

  @media (max-width: 1184px) {
    font-size: 3,25rem;
  }

  @media (max-width: 750px) {
    font-size: 2.8rem;
  }

  @media (max-width: 600px) {
    font-size: 2.4rem;
  }

  @media (max-width: 520px) {
    font-size: 2rem;
  }


  @media (max-width: 480px) {
    font-size: 1.8rem;
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;


