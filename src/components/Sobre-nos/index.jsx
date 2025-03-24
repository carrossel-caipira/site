import { useEffect, useRef } from "react"; // Adicionei useEffect e useRef
import goianiaImg from "../../assets/images/goiania.jpg";
import reuniaoImg from "../../assets/images/reuniao.png";
import Title from "../Title/";
import Paragraph from "../Paragraph";
import Subtitle from "../SubTitle"
import Teste from "../../assets/images/teste.png"
import {
  Hist,
  Right,
  Left,
  CarouselContainer,
  CarouselWrapper,
  Item,
  ItemBody,
  TitleC,
  Text,
  TitleR
} from "./styles.jsx";

const items = [
  { src: goianiaImg, alt: "Imagem 1" },
  { src: goianiaImg, alt: "Imagem 3" },
  { src: goianiaImg, alt: "Imagem 4" },
  { src: goianiaImg, alt: "Imagem 5" },

];
  // { title: "spouting whale", unicode: "U+1F433" },
  // { title: "whale", unicode: "U+1F40B" },
  // { title: "dolphin", unicode: "U+1F42C" },
  // { title: "fish", unicode: "U+1F41F" },
  // { title: "tropical fish", unicode: "U+1F420" },


function History() {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const children = carouselRef.current.children;
      Array.from(children).forEach((child, index) => {
        child.style.setProperty("--index", index + 1);
      });
    }
  }, []);

  return (
    <Hist className="historia">
      <Left>
        <TitleR>
          <Title>SOBRE</Title>
          <Title>NÓS</Title>
        </TitleR>
        <Text>
        <Subtitle>
        HISTÓRIA
        </Subtitle>
          <Paragraph>Somos um grupo de robótica da UNESP Bauru. A equipe foi criada em 1997 pelo professor Renê Pegoraro com o objetivo de incentivar o ensino de robótica. Desde então, é mantida por professores e alunos, focando em pesquisa, ensino e aplicação de Robótica e Inteligência Artificial, além de participar de competições ao longo dos anos.</Paragraph>
        </Text>
      </Left>
      <Right>
        <img src={Teste}></img>


        {/* <CarouselWrapper>
          <CarouselContainer ref={carouselRef}>
            {items.map((item, index) => (
              <Item key={index} style={{ "--index": index + 1 }}>
                <ItemBody>
                <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </ItemBody>
              </Item>
            ))}
          </CarouselContainer>
        </CarouselWrapper> */}
      </Right>
    </Hist>
  );
}

export default History;
