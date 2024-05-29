import React from 'react'
import { Background, ImageFooter, Copy, TextFooter, Where, Contact, TittleFooter  } from './styles.jsx'
import logo from '../../assets/images/logo_footer.svg'



function Footer(){
    return (
        <Background>
          <TextFooter>
            <Where>
              <TittleFooter>
                Onde Estamos
              </TittleFooter>
            </Where>
            <Contact>
              <TittleFooter>
                Contatos
              </TittleFooter>
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
