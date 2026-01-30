import React from 'react'
import Title from '../Title/'
import SubTitle from '../SubTitle/'
import Recogna from '../../assets/images/recogna.svg'
import { Patrocinadores, MainImage } from './styles.jsx';

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
