import styled from "styled-components";
import Title from "../Title";

export const Patrocinadores = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme.lightBg};
  position: relative;
  z-index: -2;
  margin-top: 15px;


  & ${Title} {
    color: ${(props) => props.theme.buttonColor};
    margin-bottom: ${(props) => props.theme.margin_l};
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;
export const MainImage = styled.img`
  width: 40vw;
  min-width: 450px;

  @media (max-width: ${(props) => props.theme.deviceMobile}) {
    width: 70vw;
  }
`;
