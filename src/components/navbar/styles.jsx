import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const fadeIn = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: ${props => props.theme.darkBg};
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  color: white;
  position: fixed;
  top:0;
  font-family: Advent Pro;
  background-color: ${props => props.theme.darkBg};
  width: 100vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 0 90px;

  @media (max-width: ${props => props.theme.deviceMobile}) {
    height: 70px;
  }

  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.darkBg};
    z-index: 1000;
    width: 100%;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 12px);

  @media (max-width: ${props => props.theme.deviceMobile}) {
    gap: clamp(0.2rem, 1vw, 8px);
  }
`;

export const LogoImage = styled.div`
  transition: transform 0.7s ease;

  img {
    width: clamp(3rem, 4vw, 4vw);

    @media (max-width: ${props => props.theme.deviceMobile}) {
      width: 8vw;
    }
  }

  &:hover {
    transform: rotate(360deg);
  }
`;

export const LogoText = styled.span`
  font-size: clamp(2rem, 3vw, 3vw);

  @media (max-width: ${props => props.theme.deviceMobile}) {
    font-size: clamp(5vw, 5vw, 5vw);
  }
`;


export const LinkItems = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(1rem, 3vw, 3.125vw);
  font-size: clamp(1.3rem, 2vw, 1.6875rem);

  @media (max-width: ${props => props.theme.deviceMobile}) {
    display: none;
  }
`;


export const NavLink = styled(Link)`
  cursor: pointer;
  transition: font-size 0.2s ease;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.25);

  @media (max-width: ${props => props.theme.deviceMobile}) {
    font-size: 2.5vw;
  }

  &:hover {
    font-size: clamp(1.2rem, 2vw, 1.75rem);
    border-bottom: 2px solid white;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 25px;

  @media (max-width: ${props => props.theme.deviceMobile}) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 70px;
  right: 0;
  width: 60%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: ${props => props.theme.darkBg};
  /*background-color: rgba(0, 0, 0, 0.7);*/
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  gap: 20px;
  font-size: 20px;
  text-transform: uppercase;
  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) => isOpen && `
    display: flex;
    transform: translateX(0);
  `}

  @media (max-width: ${props => props.theme.deviceMobile}) {
    display: flex;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  }

  ${NavLink} {
    font-size: 20px;

    &:hover {
      font-size: 22px;
    }
  }
`;
