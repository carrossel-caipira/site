import React from 'react'
import Title from '../Title/'
import Recogna from '../../assets/images/recogna.svg'
import backzao from '../../assets/images/background.svg';
import { Patrocinadores, StainTop, StainBottom, MainImage } from './styles.jsx';

function Sponsors() {
    return (
        <Patrocinadores>
            {/* <StainTop src={ManchaT} alt="Mancha Top"/> */}
            <Title>PATROCINADORES</Title>
            <MainImage src={Recogna} alt="Imagem Principal" />
            {/* <StainBottom src={ManchaB} alt="Mancha Bottom" /> */}
        </Patrocinadores>
    );
}

export default Sponsors
