import React, { useState } from 'react';
import './styles.css';
import claytonImage from './fotos/clayton.png';
import dogImage from './fotos/dog.png';
import Title from '../Title/'
import Paragraph from '../Paragraph/'

const perfis = [
    { nome: 'Clayton', imagem: claytonImage },
    { nome: 'Clayton', imagem: claytonImage },
    { nome: 'Clayton', imagem: claytonImage },
    { nome: 'dog', imagem: dogImage },
    { nome: 'dog', imagem: dogImage },
    { nome: 'dog', imagem: dogImage },
    { nome: 'Clayton', imagem: claytonImage },
    { nome: 'Clayton', imagem: claytonImage },
    { nome: 'Clayton', imagem: claytonImage },
    { nome: 'dog', imagem: dogImage },
    { nome: 'dog', imagem: dogImage },
    { nome: 'dog', imagem: dogImage },
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
    <section className="group">
      <Title>Equipe</Title>
      <div className="container">
        <button onClick={() => rolar('esquerda')} className="seta">&lt;</button>
        <div className="perfis">
          {perfis.slice(indiceInicial, indiceInicial + 3).map((perfil, index) => (
            <div key={perfil.nome + index} className="perfil">
              <img src={perfil.imagem} alt={perfil.nome} />
              <Paragraph>{perfil.nome}</Paragraph>
            </div>
          ))}
        </div>
        <button onClick={() => rolar('direita')} className="seta">&gt;</button>
      </div>
    </section>
  );
}

export default ListaPerfis;
