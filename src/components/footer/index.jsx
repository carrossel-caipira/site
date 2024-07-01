import React from 'react'
import { Background, ImageFooter, Copy, TextFooter, Where, Contact, TittleFooter, Info, ImagesFooter  } from './styles.jsx'
import logo from '../../assets/images/logo_footer.svg'
import fb from '../../assets/images/logo_fb.svg'
import ig from '../../assets/images/logo_ig.svg'
import gm from '../../assets/images/logo_gm.svg'
import lkd from '../../assets/images/logo_lkd.svg'
import unesp from '../../assets/images/logo_unesp.svg'


function Footer(){
    return (
        <Background className="contato">
          <TextFooter>
            <Where>
              <TittleFooter>
                Onde Estamos
              </TittleFooter>
              <Info>
              Av. Eng. Luís Edmundo Carrijo Coube, 2085 - Nucleo Res. Pres. Geisel, Bauru - SP, 17033-360
              </Info>
            </Where>
            <Contact>
              <TittleFooter>
                Contatos
              </TittleFooter>
              <Info>
                <ImagesFooter>
                  <a href="https://www.facebook.com/carrosselcaipirabauru/?locale=pt_BR"><img className="fb" src={fb} alt="facebook" /></a>
                  <a href="https://www.instagram.com/carrosselcaipira/"><img className="ig" src={ig} alt="instagram" /></a>
                  <a href=""><img className="lkd" src={lkd} alt="linkedin" /></a>
                  <a href=""><img className="gm" src={gm} alt="gmail" /></a>
                  <a href=""><img className="unesp" src={unesp} alt="unesp" /></a>
                </ImagesFooter>
              </Info>
            </Contact>
          </TextFooter>
          <ImageFooter>
            <img src={logo} alt="sla" />
          </ImageFooter>
          <Copy>
            © Copyright - 2024 Carrossel Caipira
          </Copy>
        </Background>

    )
}

export default Footer
