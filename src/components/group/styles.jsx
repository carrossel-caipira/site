import styled from 'styled-components';


export const GroupSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SetaButton = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
    animation-play-state: paused;
  }
`;

export const PerfisContainer = styled.div`
  display: flex;
  overflow: auto;
  transition: transform 0.3s ease;
`;

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 ${props => props.theme.margin_xxl};
`;

export const PerfilImg = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  border: 8px solid;
`;

export const BorderPar = styled(PerfilImg)`
  border-color: ${props => props.theme.titleColor2};
`;

export const BorderImpar = styled(PerfilImg)`
  border-color: ${props => props.theme.titleColor};
`;

export const Texto = styled.h3`
    margin-top: ${props => props.theme.margin_s};
    color: black;
    font-family: Poppins;
    font-size: 1.5rem;
`;