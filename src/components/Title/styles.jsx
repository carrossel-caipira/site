import styled from "styled-components"

export const Title = styled.h1`
  font-family: "Bowlby One SC", sans-serif;
  font-size: 3.235rem;
  color: ${props => props.theme.titleColor};
  letter-spacing: 3px;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 360px) {
    font-size: 1.75rem;
  }
`;
