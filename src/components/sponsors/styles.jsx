import styled from "styled-components";
import Title from '../Title';

export const Patrocinadores = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.lightBg};
  position: relative;

  & ${Title} {

    color: ${props => props.theme.titleColor2};
  }
`;

export const StainTop = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 30vh;
`;

export const StainBottom = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30vh;
`;

export const MainImage = styled.img`
  max-width: 800px;
  margin-bottom: ${props => props.theme.margin_l};
`;
