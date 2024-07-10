import React, { useState, useEffect, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo_carrossel.svg';
import { Nav, Logo, LogoText, LogoImage, LinkItems, NavLink, Hamburger, MobileMenu } from './styles.jsx';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [Mobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <Nav>
      <Logo>
        <LogoImage>
          <img src={logo} alt="Logo.carrosel" />
        </LogoImage>
        <LogoText>Carrossel Caipira</LogoText>
      </Logo>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
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
      <MobileMenu isOpen={isOpen}>
        <NavLink onClick={toggleMenu} to="group" smooth={true} spy={true} offset={-70} duration={500}>
          Membros
        </NavLink>
        <NavLink onClick={toggleMenu} to="historia" smooth={true} spy={true} offset={-70} duration={500}>
          História
        </NavLink>
        <NavLink onClick={toggleMenu} to="contato" smooth={true} spy={true} offset={-70} duration={500}>
          Contato
        </NavLink>
      </MobileMenu>
    </Nav>
  );
}

export default Navbar;
