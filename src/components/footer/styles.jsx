import styled from "styled-components";
import Paragraph from "../Paragraph"

export const Background = styled.div`
  position: relative;
  width: 100%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 0px;
  background-color: ${props => props.theme.darkBg};
`;

export const Copy = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Paragraph}{
      color: ${props => props.theme.darkBg};
      font-size: 1rem;
  }
`;
export const Content = styled.div``;

export const BackgroundImage = styled.div``;
