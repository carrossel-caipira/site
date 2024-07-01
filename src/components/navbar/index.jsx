import React from 'react';
import logo from '../../assets/images/logo_carrossel.svg';
import { Nav, LinkItems, Logo, LogoText, NavLink, LogoImage } from './styles.jsx';

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
        <NavLink to="group" smooth={true} spy={true} offset={-70} duration={500}>
          Membros
        </NavLink>
        <NavLink to="historia" smooth={true} spy={true} offset={-70} duration={500}>
          História
        </NavLink>
        <NavLink to="contato" smooth={true} spy={true} offset={-70} duration={500}>
          Contato
        </NavLink>
      </LinkItems>
    </Nav>
  );
}

export default Navbar;
