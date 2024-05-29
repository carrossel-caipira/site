import styled from "styled-components";
import { Link } from 'react-scroll';

export const Background = styled.div`
  display: grid;
  width: 100vw;
  grid-template-areas:
    "texto img"
    "copy copy"
  ;

  background-color: black;
`;

export const ImageFooter = styled.div `
  grid-area: img;
  background-color: #001B3C;
  width: 50vw;
  height: 60vh;

  img{
    width: 50vw;
    height: 100%;
  }
`;

export const TextFooter = styled.div `
  grid-area: texto;
  display: grid;
  grid-template-areas:
    "where"
    "contact"
  ;
  color: white;
  width: 50vw;
  background-color: #001B3C;
`;

export const Copy = styled.div `
  background-color: #131313;
  grid-area: copy;
  height: 7vh;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 15px;
`;

export const Where = styled.div `
  grid-area: where;
  background-color: aqua;
`;

export const Contact = styled.div `
  grid-area: contact;
  background-color: whitesmoke;
`;

export const TittleFooter = styled.div `
  background-color: azure;
`;

