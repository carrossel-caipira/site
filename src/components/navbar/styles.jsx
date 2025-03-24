import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const fadeIn = keyframes`
  from {
    background-color: rgba(255, 255, 255, 1);
  }
  to {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px;
  color: white;
  top: 0;
  font-family: Advent Pro;
  font-weight: 600;
  color: ${props => props.theme.darkBg};
  background-color: #b8bccc;
  width: 100vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 0 80px;
  transition: background-color 0.3s ease;

  @media (max-width: ${props => props.theme.deviceMobile}) {
    height: 70px;
    padding: 0 40px;
  }

  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    animation: ${fadeIn} 0.5s ease forwards;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${props => props.theme.deviceMobile}) {
    gap: 0.5rem;
  }
`;

export const LogoImage = styled.div`
  transition: transform 0.7s ease;

  img {
    width: 4.6rem;

    @media (max-width: ${props => props.theme.deviceMobile}) {
      width: 3rem;
    }
  }

  &:hover {
    transform: rotate(-360deg);
  }
`;

export const LogoText = styled.span`
  font-size: 3rem;

  @media (max-width: ${props => props.theme.deviceMobile}) {
    font-size: 2rem;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  align-items: center;
  gap: 7vw;
  font-size: 2rem;

  @media (max-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    font-size: 1.950rem;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;


  @media (max-width: 1024px) {
    font-size: 1.5rem;

  }

  @media (max-width: ${props => props.theme.deviceMobile}) {
    font-size: 1.2rem;

  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 3rem;

  @media (max-width: 1025px) {
    display: block;
    font-size: 2.25rem;
    margin-bottom: -15px;
  }

  @media (max-width: 650px) {
    display: block;
    font-size: 1.75rem;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  position: absolute;
  @media (max-width: 1025px) {
  top: 108px;
  right: 0;
  color: ${props => props.theme.darkBg};
  width: 60%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${props => props.theme.lightBg};
  padding: 20px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  gap: 1rem;
  font-size: 2rem;
  text-transform: uppercase;
  transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 650px){
    top:70px;
  }

  ${({ isOpen }) => isOpen && `
    display: flex;
    transform: translateX(0);
  `}

  @media (max-width: 1025px) {
    display: flex;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    gap: 0.8rem;
    font-size: 1rem;
  }

  ${NavLink} {
    font-size: 1.2rem;

    @media (max-width: 1025px) {
      font-size: 1rem;
    }
  }
`;
