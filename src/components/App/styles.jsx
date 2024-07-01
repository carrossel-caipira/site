import styled from 'styled-components';
import Hero from '../hero/'
import AboutUs from '../aboutUs/'
import History from '../history/'
import Group from '../group/'
import Sponsors from '../sponsors/'
import footer from '../footer/'

const styledAbout = styled(AboutUs)``;

console.log(styledAbout);

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: ${props => parseFloat(props.theme.margin_xxl) * 4.235 + "rem"};
  }
`;

export const ManchaHistory = styled.img`
  width: 100vw;
  transform: translateX(-0%) translateY(-196vh);
  position: relative;
  margin-bottom: -230vh;
  z-index: -1;
`
