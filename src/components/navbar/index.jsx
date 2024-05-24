import React from 'react'
import logo from '../../assets/images/logo_carrossel.svg'
import { Nav, LinkItems, Logo, LogoText, NavLink, LogoImage } from './styles.jsx'

function Navbar() {
  return (
    <Nav>
      <Logo>
        <LogoImage>
          <img src={logo} alt="Logo.carrosel" width="77" />
        </LogoImage>
        <LogoText>Carrossel Caipira</LogoText>
      </Logo>
      <LinkItems>
        <NavLink to="section1" smooth={true}>Membros</NavLink>
        <NavLink to="section2" smooth={true}>História</NavLink>
        <NavLink to="section3" smooth={true}>Contato</NavLink>
      </LinkItems>
    </Nav>
  )
}

export default Navbar
