import styled from "styled-components"
import Title from '../Title/'
import Paragraph from '../Paragraph/'

export const CarrosselStyles = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  min-width: 600px;
  height: 5.50em;
  font-size: 4.235em;
  justify-content: center;
  gap: 10px;

  mask-image: linear-gradient(to right, transparent, rgb(0 0 0 / 100%), transparent);

  & img {
    height: 95%;
    transition: left ease-in-out .75s;
    position: relative;
    left: 0px;
  }
`

export const Hist = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: 100vh;
  width: 100vw;
  margin-top: 12.5vh; /* aconta pela mancha_history */

  & ${Title} {
    color: white;
    margin-bottom: ${props => props.theme.margin_l};
  }

  & ${CarrosselStyles} {
    margin-bottom: ${props => props.theme.margin_l};
  }

  & ${Paragraph} {
    width: 35em;
    max-width: 80vw;
    text-align: center;
    color: white;
  }
`

