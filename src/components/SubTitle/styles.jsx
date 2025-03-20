import styled from "styled-components";

export const SubTitle = styled.h2`
  font-family: Poppins;
  color: ${(props) => props.theme.subTitleColor};
  font-size: 3.25rem;
  line-height: 2;
  font-weight: 900;
  height: fit-content;

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

  @media (max-width: 1080px) {
    font-size: 1.85rem;
  }

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;
