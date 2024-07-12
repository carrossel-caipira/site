import styled from "styled-components";
import { Link } from 'react-scroll';

export const Background = styled.div`
  display: grid;
  width: 100vw;
  grid-template-areas:
    "texto img"
    "copy copy"
  ;

  background-color: ${props => props.theme.darkBg};
  margin-bottom: 0 !important;
`;

export const ImageFooter = styled.div `
  grid-area: img;
  width: 50vw;
  height:100%;
  img{
    width: 50vw;
    height: 100%;
  }
`;

export const TextFooter = styled.div `
  grid-area: texto;
  grid-template-areas:
    "where"
    "contact"
  ;
  color: white;
  width: 50vw;
  font-family: ${props => props.theme.fontBow};
`;

export const Copy = styled.div `
  background-color: ${props => props.theme.colorBgCopy};
  grid-area: copy;
  height: 7vh;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: ${props => props.theme.fontPop};
  font-size: 15px;
`;

export const Where = styled.div `
  grid-area: where;
  display:grid;
  margin-left:61px;
  margin-top: 7vh;
`;

export const Contact = styled.div `
  grid-area: contact;
  display:grid;
  margin-left:61px;
  margin-top: 7vh;
`;

export const TittleFooter = styled.div `
  color: ${props => props.theme.titleColor};
  font-size:35px;
`;

export const Info = styled.div`
  width:50%;
  font-size: 20px;
  text-align: justify;
  margin-top: 3vh;
  font-family: ${props => props.theme.fontPop};
`
export const ImagesFooter = styled.div`
  width:25%;
  display:grid;
  grid-template-areas:
    "fb ig lk gm"
    "unesp unesp unesp unesp"
  ;

  a{
    width:59px;
  }
  .fb{
    grid-area:fb;
  }
  .ig{
    grid-area:ig;
  }
  .lkd{
    grid-area:lk;
  }
  .gm{
    grid-area:gm;
  }
  .unesp{
    grid-area:unesp;
  }
`

