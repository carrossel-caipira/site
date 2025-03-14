import React from "react";
import { Section, GridContainer, Card, Icon} from "./styles";
import Paragraph from "../Paragraph"
import Title from "../Title/"
import SubTitle from "../SubTitle"
import chipIcon from "../../assets/images/logo_carrossel.svg";
import bonequinhos from "../../assets/images/work-team.svg";
import comp from "../../assets/images/competitividade.svg";
import learn_img from "../../assets/images/learn-img.svg";


const items = [
  { id: 1, title: "Cooperação", desc: "O Carrossel Caipira preza com que os integrantes colaborem e cooperem entre si para o desenvolvimento do projeto, todo o trabalho é voltado para que os integrantes convivam bastante nos ambientes do projeto para que criem um sentimento de união.", icon: bonequinhos },
  { id: 2, title: "Competitividade", desc: "A competitividade no nosso projeto vai além da disputa. Ela é vista como uma oportunidade de crescimento, onde os estudantes podem testar suas habilidades, aprender com os desafios e aprimorar suas soluções. Buscamos fomentar a troca de ideias e o trabalho em equipe pois são tão importantes quanto a vitória.", icon: comp },
  { id: 3, title: "Pesquisa", desc: "No nosso projeto de futebol de robôs, o aprendizado vai além da simples aplicação de uma stack tecnológica. soluções inovadoras. Ao integrar pesquisa e prática, buscamos criar um ambiente dinâmico onde a curiosidade e a inovação sejam as maiores aliadas do aprendizado.", icon: learn_img }
];

function Objetivos() {
  return (
    <Section>
      <Title>Nossos Pilares</Title>
      <GridContainer>
        {items.map(item => (
          <Card key={item.id}>
            <Icon src={item.icon} alt={item.title} />
            <SubTitle>{item.title}</SubTitle>
            <Paragraph>{item.desc}</Paragraph>
          </Card>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Objetivos;
