import styled from "styled-components";

export const SubTitle = styled.h2`
  font-family: Poppins;
  color: ${(props) => props.theme.subTitleColor};
  font-size: 3.25rem;
  line-height: 2;
  font-weight: 900;
  height: fit-content;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
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
