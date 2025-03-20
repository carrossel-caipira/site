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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;

  & ${SubTitle} {
    color: white;
    text-align: center;
    margin-bottom: 20px;

    @media (max-width: 480px) {
    font-size: 1.6rem;
  }

  @media (max-width: 360px) {
    font-size: 1.6rem;
  }

  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.buttonColor};
  color: white;
  font-size: 1rem;
  font-family: ${props => props.theme.fontPop};
  font-weight: bold;
  border: none;
  padding: 12px 24px;
  border-radius: 28px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;
