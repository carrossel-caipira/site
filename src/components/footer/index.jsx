import React, { useState } from 'react';
import { Background, Copy, TextFooter, ImageWrapper, Where, Contact, TittleFooter, Info, ImagesFooter } from './styles.jsx';
import logo from '../../assets/images/logo_footer.svg';
import fb from '../../assets/images/logo_fb.svg';
import ig from '../../assets/images/logo_ig.svg';
import gm from '../../assets/images/logo_gm.svg';
import lkd from '../../assets/images/logo_lkd.svg';
import unesp from '../../assets/images/logo_unesp.svg';

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleGmailClick = (e) => {
    e.preventDefault();
    const email = 'carrosselcaipira@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Erro ao copiar email:', err);
    });
  };

  return (
    <Background className="contato">
      <ImageWrapper>
        <img src={logo} alt="Background logo" />
      </ImageWrapper>
      <TextFooter>
        <Where>
          <TittleFooter>Onde Estamos</TittleFooter>
          <Info>Av. Eng. Luís Edmundo Carrijo Coube, 2085 - Nucleo Res. Pres. Geisel, Bauru - SP, 17033-360</Info>
        </Where>
        <Contact>
          <TittleFooter>Contatos</TittleFooter>
          <Info>
            <ImagesFooter>
              <a href="https://www.facebook.com/carrosselcaipirabauru/?locale=pt_BR"><img className="fb" src={fb} alt="facebook" /></a>
              <a href="https://www.instagram.com/carrosselcaipira/"><img className="ig" src={ig} alt="instagram" /></a>
              <a href="#"><img className="lkd" src={lkd} alt="linkedin" /></a>
              <a href="#" onClick={handleGmailClick}>
                <img className="gm" src={gm} alt="gmail" />
              </a>
              <a href="https://www.fc.unesp.br/#!/"><img className="unesp" src={unesp} alt="unesp" /></a>
            </ImagesFooter>
            {copied && <div className="msg">Email copiado!</div>}
          </Info>
        </Contact>
      </TextFooter>
      <Copy>© Copyright - 2024 Carrossel Caipira</Copy>
    </Background>
  );
}

export default Footer;
