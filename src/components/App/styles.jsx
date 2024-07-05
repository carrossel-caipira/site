import styled from 'styled-components';
// TODO: editar mancha history para ser menos extrema

let aspectRatio = 1920/2110;

const pagesMargin = props => parseFloat(props.theme.margin_xxl) * 4.235 + "rem";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: ${pagesMargin};
  }
`;

export const ManchaHistory = styled.img`
  width: 100vw;
  min-width: 1400px;
  aspect-ratio: ${aspectRatio};
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: calc(-45vh - 0.5*${pagesMargin} - max(${1/aspectRatio * 50}vw, ${1/aspectRatio * 700}px));
  margin-bottom: calc(min(-${1/aspectRatio * 100}vw, -${1/aspectRatio * 1400}px) + 75px );
  z-index: -1;
`
// margin-bottom: -230vh;
