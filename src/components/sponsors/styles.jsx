import styled from "styled-components";
import Title from "../Title";

export const Patrocinadores = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: relative;
  margin-bottom: calc(${(props) => props.theme.margin_sections}/2);

  & ${Title} {
    font-size: 4.25rem;
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
  min-width: 400px;

  @media (max-width: ${(props) => props.theme.deviceMobile}) {
    width: 100vw;
  }
`;
