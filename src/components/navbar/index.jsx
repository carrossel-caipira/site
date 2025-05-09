import React, { useState, useEffect, useCallback } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo_gradiente.png';
import { Nav, Logo, LogoText, LogoImage, LinkItems, NavLink, Hamburger, MobileMenu } from './styles.jsx';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);
  const [opacity, setOpacity] = useState(0.75);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1025);
    if (window.innerWidth >= 1025) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(Math.max(0.75 - 50*window.scrollY/window.innerHeight, 0.5));
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleResize]);

  return (
    //<Nav className={isSticky ? 'sticky' : ''}>
    <Nav style={{backgroundColor: `rgba(255, 255, 255, ${opacity})`}}>
      <Logo to="hero" smooth={true} spy={true} duration={500}>
        <LogoImage>
          <img src={logo} alt="Logo.carrosel" />
        </LogoImage>
        <LogoText>Carrossel Caipira</LogoText>
      </Logo>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <LinkItems>
        <NavLink to="historia" smooth={true} spy={true} offset={-160} duration={500}>
          Sobre nós
        </NavLink>
        <NavLink to="pilares" smooth={true} spy={true} duration={500} offset={-70}>
          Piláres
        </NavLink>
        <NavLink to="contato" smooth={true} spy={true} offset={-70} duration={500}>
          Contato
        </NavLink>
      </LinkItems>
      <MobileMenu isOpen={isOpen}>
      <NavLink onClick={toggleMenu} to="hero" smooth={true} spy={true} offset={-70} duration={500}>
          Inicio
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
