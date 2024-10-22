import styled from 'styled-components';
import Title from '../Title/';

export const CustomTitle = styled(Title)`
  margin-top: 100px;
  //color: ${props => props.theme.darkBg};
`;


export const GroupSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //margin-top: 80px;

`;

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PerfisWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1000px;
`;

export const PerfisContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: calc(100% * ${props => props.perfisLength || 1});

`;

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => `calc(100% / ${props.itemsVisiveis})`};
  flex-shrink: 0;

`;

export const PerfilImg = styled.img`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  border: 6px solid;
`;

export const BorderPar = styled(PerfilImg)`
  border-color: ${props => props.theme.titleColor};
`;

export const BorderImpar = styled(PerfilImg)`
  border-color: ${props => props.theme.titleColor2};
`;

export const Texto = styled.h3`
  margin-top: ${props => props.theme.margin_s};
  color: black;
  font-family: Poppins;
  font-size: 1.3rem;
`;
