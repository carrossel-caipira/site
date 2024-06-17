import React, { useState } from 'react';
import './styles.css';
import claytonImage from './fotos/clayton.png';
import dogImage from './fotos/dog.png';
import Mancha from '../../assets/images/mancha_bot_group.svg';

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
    <div className="container">
      <h2 className="titulo">EQUIPE</h2>
      <button onClick={() => rolar('esquerda')} className="seta">&lt;</button>
      <div className="perfis">
        {perfis.slice(indiceInicial, indiceInicial + 3).map((perfil, index) => (
          <div key={perfil.nome + index} className="perfil">
            <img src={perfil.imagem} alt={perfil.nome} />
            <p>{perfil.nome}</p>
          </div>
        ))}
      </div>
      <button onClick={() => rolar('direita')} className="seta">&gt;</button>
    </div>
  );
}

export default ListaPerfis;
