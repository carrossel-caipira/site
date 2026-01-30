import styled from "styled-components"

export const Title = styled.h1`
  font-family: Poppins;
  font-size: 8rem;
  color: ${props => props.theme.darkBg};
  letter-spacing: 3px;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 5.5rem;
  }

  @media (max-width: 600px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }

  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;
