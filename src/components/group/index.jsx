import React, { useState, useEffect } from 'react';
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
  const [itemsVisiveis, setItemsVisiveis] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setItemsVisiveis(3);
      } else if (window.innerWidth >= 800) {
        setItemsVisiveis(2);
      } else {
        setItemsVisiveis(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function rolar(direcao) {
    let novoIndice = indiceInicial;
    novoIndice = direcao === 'esquerda'
      ? Math.max(novoIndice - 1, 0)
      : Math.min(novoIndice + 1, perfis.length - itemsVisiveis);

    setIndiceInicial(novoIndice);
  }

  return (
    <GroupSection className='group'>
      <Title>Equipe</Title>
      <Container>
        <SetaButton onClick={() => rolar('esquerda')} disabled={indiceInicial === 0}>
          <img src={setaE} alt="Seta esquerda" />
        </SetaButton>
        <PerfisWrapper>
          <PerfisContainer style={{ transform: `translateX(-${indiceInicial * 100 / itemsVisiveis}%)` }}>
            {perfis.map(perfil => (
              <PerfilContainer key={perfil.id} itemsVisiveis={itemsVisiveis}>
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
        <SetaButton onClick={() => rolar('direita')} disabled={indiceInicial === perfis.length - itemsVisiveis}>
          <img src={setaD} alt="Seta direita" />
        </SetaButton>
      </Container>
    </GroupSection>
  );
}

export default ListaPerfis;
