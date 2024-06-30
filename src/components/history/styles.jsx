import styled from "styled-components"
import Title from '../Title/'
import Paragraph from '../Paragraph/'

export const CarrosselStyles = styled.div`
  display: flex;
  align-items: center;
  width: 40vw;
  height: 4.25em;
  font-size: 4.235em;
  justify-content: enter;
  gap: 10px;

  background-color: ${props => props.theme.titleColor};

  mask-image: linear-gradient(to right, transparent, rgb(0 0 0 / 100%), transparent);

  & img {
    height: 4em;
    transition: left ease-in-out .75s;
    position: relative;
    left: 0px;
  }
`
/*
    transform: translateX(${() => offset / 2});
    transform: translateX(calc(-20vw - ${() => offset}px));
*/

export const Hist = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.darkBg};

  & ${Title} {
    margin-bottom: ${props => props.theme.margin_l};
  }

  & ${CarrosselStyles} {
    margin-bottom: ${props => props.theme.margin_l};
  }

  & ${Paragraph} {
    width: 30vw;
    text-align: center;
    color: white;
  }
`

