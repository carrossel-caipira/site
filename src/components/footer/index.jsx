import React, { useState } from 'react';
import { Background, Content, Copy, BackgroundImage } from './styles.jsx';
import Paragraph from "../Paragraph"

function Footer() {

  return (
    <Background>
      <Copy>
        <Paragraph>
        © Copyright- 2025 Carrossel Caipira
        </Paragraph>
      </Copy>
    </Background>
  );
}
export default Footer;
