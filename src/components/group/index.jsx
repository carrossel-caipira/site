import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Title/';
import setaD from '../../assets/images/seta-right.svg';
import setaE from '../../assets/images/seta-left.svg';
import claytonImage from './fotos/clayton.png';
import dogImage from './fotos/dog.png';
import mario from './fotos/mario.jpg';
import franco from './fotos/Franco.jpg';

import {
  GroupSection,
  Container,
  SetaButton,
  PerfisWrapper,
  PerfisContainer,
  PerfilContainer,
  BorderPar,
  BorderImpar,
  Texto
} from './styles';

const perfis = [
  { id: 1, nome: 'Dr. Clayton Pereira', imagem: claytonImage },
  { id: 2, nome: 'Mario Masao Mukai', imagem: mario },
  { id: 3, nome: 'Franco BAL BLA BLA', imagem: franco },
  { id: 4, nome: 'dog', imagem: dogImage },
  { id: 5, nome: 'dog', imagem: dogImage },
  { id: 6, nome: 'dog', imagem: dogImage },
];

function ListaPerfis() {
  const [indiceInicial, setIndiceInicial] = useState(0);

  function rolar(direcao) {
    let novoIndice = indiceInicial;
    novoIndice = direcao === 'esquerda'
      ? Math.max(novoIndice - 1, 0)
      : Math.min(novoIndice + 1, perfis.length - 3);

    setIndiceInicial(novoIndice);
  }

  return (
    <GroupSection>
      <Title>Equipe</Title>
      <Container>
        <SetaButton onClick={() => rolar('esquerda')} disabled={indiceInicial === 0}>
          <img src={setaE} alt="Seta esquerda" />
        </SetaButton>
        <PerfisWrapper>
          <PerfisContainer style={{ transform: `translateX(-${indiceInicial * 100 / 3}%)` }}>
            {perfis.map(perfil => (
              <PerfilContainer key={perfil.id}>
                {perfil.id % 2 === 0 ? (
                  <BorderPar src={perfil.imagem} alt={perfil.nome} />
                ) : (
                  <BorderImpar src={perfil.imagem} alt={perfil.nome} />
                )}
                <Texto>{perfil.nome}</Texto>
              </PerfilContainer>
            ))}
          </PerfisContainer>
        </PerfisWrapper>
        <SetaButton onClick={() => rolar('direita')} disabled={indiceInicial === perfis.length - 3}>
          <img src={setaD} alt="Seta direita" />
        </SetaButton>
      </Container>
    </GroupSection>
  );
}

export default ListaPerfis;
