import styled from "styled-components";
import SubTitle from "../SubTitle";

export const Rec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  width: 100vw;
  background-color: ${(props) => props.theme.titleColor};
  background-image: url(${(props) => props.theme.backgroundImage});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: ${props => props.theme.margin_sections};

  & ${SubTitle} {
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    font-size: 2.8rem;
  }

    @media (max-width: 550px) {
    font-size: 1.9rem;
  }

  @media (max-width: 360px) {
    font-size: 1.6rem;
  }

  }
`;

export const Button = styled.a`
  background-color: ${props => props.theme.buttonColor};
  color: white;
  font-size: 1.25rem;
  font-family: ${props => props.theme.fontPop};
  font-weight: bold;
  border: none;
  padding: 12px 46px;
  border-radius: 28px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.darkBg};
  }
`;
