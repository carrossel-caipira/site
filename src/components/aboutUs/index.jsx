import React from 'react'
import {About, InfoCard, CardsContainer} from './styles.jsx'
import aboutUsImg from '../../assets/images/logo_carrossel.svg'
import roboImg from '../../assets/images/robo_carrosel.svg'
import Title from '../Title/index.jsx'
import SubTitle from '../SubTitle/index.jsx'
import Paragraph from '../Paragraph/index.jsx';

function AboutUs(props){
    return (
        <About id="about-us" className={props.className}>
            <Title>SOBRE NÓS</Title>
            <CardsContainer>
                <InfoCard>
                      <img src={aboutUsImg} />
                      <SubTitle>TITULO 1</SubTitle>
                      <Paragraph>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Quisque eu semper sapien, eu
                            blandit velit. Praesent
                            consectetur velit dui, ut
                            tincidunt nibh aliquet sed</Paragraph>
                </InfoCard>
                <InfoCard>
                      <img src={roboImg} />
                      <SubTitle>TITULO 1</SubTitle>
                      <Paragraph>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Quisque eu semper sapien, eu
                            blandit velit. Praesent
                            consectetur velit dui, ut
                            tincidunt nibh aliquet sed</Paragraph>
                </InfoCard>
            </CardsContainer>
        </About>
    )
}

export default AboutUs
