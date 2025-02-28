import styled from "styled-components";
import SubTitle from "../SubTitle";
import backzao from '../../assets/images/hero_back.svg';

export const Rec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  width: 100vw;
  // background-color: ${(props) => props.theme.titleColor};
  background-image: url(${backzao});
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;

  & ${SubTitle} {
    color: white;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.titleColor2};
  color: white;
  font-size: 1rem;
  font-family: ${props => props.theme.fontPop};
  font-weight: bold;
  border: none;
  padding: 12px 24px;
  border-radius: 18px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;
