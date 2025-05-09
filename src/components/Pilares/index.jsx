import React from "react";
import { Section, GridContainer, Card, Icon, Box, HeaderBox } from "./styles";
import Paragraph from "../Paragraph";
import Title from "../Title";
import SubTitle from "../SubTitle";
import teste from "../../assets/images/logo_carrossel.svg";
import aaa1 from "../../assets/images/trestres(1).png";
import aaa2 from "../../assets/images/umum(1).png";
import aaa3 from "../../assets/images/doisdois(1).png";

const items = [
  {
    id: 1,
    title: "COOPERAÇÃO",
    desc: "Valorizamos a a colaboração e a cooperação entre os integrantes no desenvolvimento do projeto, promovendo a convivência constante para fortalecer o sentimento de união.",
    icon: aaa2,
  },
  {
    id: 2,
    title: "COMPETITIVIDADE",
    desc: "A competitividade incentiva os estudantes a testarem habilidades, superarem desafios e aprimorarem soluções. Estimamos a troca de ideias e o trabalho em equipe tanto quanto a vitória.",
    icon: aaa3,
  },
  {
    id: 3,
    title: "PESQUISA",
    desc: "Promovemos um aprendizado que vai além da aplicação de uma stack tecnológica. Ao aliar pesquisa e prática, promovemos um ambiente onde curiosidade e inovação são pilares do conhecimento",
    icon: aaa1,
  },
];

function Objetivos() {
  return (
    <Section className="pilares">
      <Title style={{alignSelf: "flex-start"}}>NOSSOS</Title>
      <GridContainer>
        {items.map((item) => (
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
      <Title style={{alignSelf: "flex-end"}}>PILARES</Title>
    </Section>
  );
}

export default Objetivos;
