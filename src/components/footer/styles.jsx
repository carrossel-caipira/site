import styled from "styled-components";
import Paragraph from "../Paragraph";

const footerHeight = "32.5vh";

export const Background = styled.div`
  display: grid;
  width: 100%;
  min-height: ${footerHeight};
  grid-template-areas:
    "texto"
    "copy";
  background-color: ${(props) => props.theme.darkBg};
  margin-bottom: 0 !important;
  overflow: hidden;
  position: relative;
  height: auto;
  font-family: Poppins;
`;

export const TextFooter = styled.div`
  grid-area: texto;
  color: white;
  background-color: transparent;
  width: 100%;
  min-height: ${footerHeight};
  font-family: ${(props) => props.theme.fontBow};

  z-index: 2;
`;

export const Copy = styled.div`
  grid-area: copy;
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  text-align: center;

  ${Paragraph} {
    color: ${(props) => props.theme.darkBg};
    font-size: .8rem;
    margin: 0;
    max-width: 90%;
    word-break: break-word;

    @media (max-width: 500px){
      font-size: 0.75rem;
    }

    @media (max-width: 450px){
      font-size: 0.7rem;
    }
  }
`;

export const Where = styled.div`
  margin-left: 5%;
  margin-top: 1.5rem;
  width: 500px;
  background-color: transparent;
  z-index: -1;
`;

export const Contact = styled.div`
  margin-left: 5%;
  margin-top: 1rem;
  background-color: transparent;
  margin-bottom: 3vh;
  z-index: -1;
`;

export const TittleFooter = styled.div`
  color: white;
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

export const Info = styled.div`
  width: 65%;
  font-family: ${(props) => props.theme.fontPop};
  background-color: transparent;
  z-index: -1;

  .msg {
    grid-area: msg;
    color: white;
    background-color: green;
    border-radius: 5px;
    align-items: center;
    font-size: 14px;
    width: 150px;
    text-align: center;
  }

  & ${Paragraph} {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.15rem;

    @media(max-width: ${props => props.theme.deviceMobile}) {
        text-align: left;
    }

  }
`;

export const ImagesFooter = styled.div`
  width: 17%;
  display: grid;
  z-index: -1;

  grid-template-areas:
    "fb ig lk gm"
    "unesp unesp unesp unesp";

  gap: 5px;

  a {
    width: 35px;
    z-index: 1;
  }
  .fb {
    grid-area: fb;
    width: 35px;
    margin-bottom: 8px;
  }
  .ig {
    grid-area: ig;
    width: 35px;
  }
  .lkd {
    grid-area: lk;
    width: 35px;
  }
  .gm {
    grid-area: gm;
    width: 35px;
  }
  .unesp {
    grid-area: unesp;
    width: 135px;
    margin-top: -5px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  margin-right: 0px;
  right: -10%;

  img {
    position: absolute;
    right: 0px;
    top: -45%;
    width: 80%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.8;
  }

  @media screen and (max-width: 1098px) {
    img {
      width: 100%;
      right: 0;
      z-index: 0;
      opacity: 0.3;
    }
  }
`;
