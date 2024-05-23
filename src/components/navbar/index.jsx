import React from 'react'
import logo from '../../assets/images/logo_carrossel.svg'
import { Nav, LinkItems, Logo, LogoText, NavLink } from './styles.jsx'

function Navbar() {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Logo.carrosel" width="77" />
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
