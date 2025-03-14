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
  { id: 1, title: "Cooperação", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: bonequinhos },
  { id: 2, title: "Competitividade", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: comp },
  { id: 3, title: "Aprendizado", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: learn_img }
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
