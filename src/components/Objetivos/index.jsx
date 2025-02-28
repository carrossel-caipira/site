import React from "react";
import { Section, GridContainer, Card, Icon} from "./styles";
import Paragraph from "../Paragraph"
import Title from "../Title/"
import SubTitle from "../SubTitle"
import coop from "../../assets/images/coop.svg";
import researchIcon from "../../assets/images/logo_carrossel.svg";
import chipIcon from "../../assets/images/logo_carrossel.svg";


const items = [
  { id: 1, title: "Cooperação", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: coop },
  { id: 2, title: "Cooperação", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: researchIcon },
  { id: 3, title: "Cooperação", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: chipIcon }
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
