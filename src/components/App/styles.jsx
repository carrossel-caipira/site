import styled from 'styled-components';

let aspectRatio = 1920/2110;

const pagesMargin = props => parseFloat(props.theme.margin_xxl) * 4.235 + "rem";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  touch-action: pan-x pan-y;
  overflow-x: hidden;

  & > * {
    margin-bottom: ${pagesMargin};
  }
`;


