import React from "react";
import { Section, GridContainer, Card, Icon, Box, HeaderBox} from "./styles";
import Paragraph from "../Paragraph"
import Title from "../Title"
import SubTitle from "../SubTitle"
import teste from "../../assets/images/logo_carrossel.svg";


const items = [
  { id: 1, title: "COOPERAÇÃO", desc: "Valorizamos a a colaboração e a cooperação entre os integrantes no desenvolvimento do projeto, promovendo a convivência constante para fortalecer o sentimento de união.", icon: teste },
  { id: 2, title: "COMPETITIVIDADE", desc: "A competitividade é vista como uma oportunidade de crescimento, que incentiva os estudantes a testarem habilidades, superarem desafios e aprimorarem soluções. Estimamos a troca de ideias e o trabalho em equipe tanto quanto a vitória.", icon: teste },
  { id: 3, title: "COOPERACAO", desc: "Nossa equipe foca em um aprendizado que vai além da aplicação de uma stack tecnológica. Ao aliar pesquisa e prática, promovemos um ambiente dinâmico, onde curiosidade e inovação são pilares essenciais do conhecimento", icon: teste }
];

function Objetivos() {
  return (
    <Section>
      <Title>NOSSOS PILARES</Title>
      <GridContainer>
        {items.map(item => (
          <Card key={item.id}>
            <HeaderBox>
              <Icon src={item.icon} alt={item.title} />
              <SubTitle>{item.title}</SubTitle>
            </HeaderBox>
            <Box>
              <Paragraph>{item.desc}</Paragraph>
            </Box>
          </Card>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Objetivos;
