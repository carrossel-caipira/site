import styled from "styled-components";

export const Background = styled.div`
  display: grid;
  width: 100vw;
  grid-template-areas:
    "texto"
    "copy"
  ;
  background-color: ${props => props.theme.darkBg};
  margin-bottom: 0 !important;
  overflow: hidden;
  position: relative;
  height: auto;
`;

export const TextFooter = styled.div`
  grid-area: texto;
  color: white;
  background-color: transparent;
  width: 100%;
  font-family: ${props => props.theme.fontBow};
`;

export const Copy = styled.div`
  background-color: ${props => props.theme.colorBgCopy};
  grid-area: copy;
  height: 7vh;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fontPop};
  font-size: 15px;
  z-index: 1;
`;

export const Where = styled.div`
  margin-left: 5%;
  margin-top: 3vh;
  width: 500px;
  background-color: transparent;
`;

export const Contact = styled.div`
  margin-left: 5%;
  margin-top: 5vh;
  background-color: transparent;
  margin-bottom: 3vh;
`;

export const TittleFooter = styled.div`
  color: ${props => props.theme.titleColor};
  font-size: 1.5rem;
  font-weight: 800;
`;

export const Info = styled.div`
  width: 50%;
  font-size: 1rem;
  font-weight: 500;
  text-align: justify;
  margin-top: 3vh;
  font-family: ${props => props.theme.fontPop};
  background-color: transparent;

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
`;

export const ImagesFooter = styled.div`
  width: 15%;
  display: grid;

  grid-template-areas:
    "fb ig lk gm"
    "unesp unesp unesp unesp"
  ;

  a {
    width: 35px;
    z-index: 1;
  }
  .fb {
    grid-area: fb;
    width: 25px;
  }
  .ig {
    grid-area: ig;
    width: 25px;
  }
  .lkd {
    grid-area: lk;
    width: 25px;
  }
  .gm {
    grid-area: gm;
    width: 25px;
  }
  .unesp {
    grid-area: unesp;
    width: 150px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  margin-right: 0px;

  img {
    position: absolute;
    right: 0;
    top: 0;
    width: 70%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      height: 100%;
      right: 0;
      z-index: 0;
      opacity: 0.3;
    }
  }
`;
