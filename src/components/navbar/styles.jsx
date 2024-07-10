import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  color: white;
  font-family: Advent Pro;
  width: 100vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 0 20px;

  @media (max-width: ${props => props.theme.deviceMobile}) {
    height: 70px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: ${props => props.theme.deviceMobile}) {
    gap: 8px;
  }
`;

export const LogoImage = styled.div`
  transition: transform 0.7s ease;

  img {
    width: 6vw;

    @media (max-width: ${props => props.theme.deviceMobile}) {
      width: 8vw;
    }
  }

  &:hover {
    transform: rotate(360deg);
  }
`;

export const LogoText = styled.span`
  font-size: 3.375vw;

  @media (max-width: ${props => props.theme.deviceMobile}) {
    font-size: 5vw;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.875vw;
  gap: 3.125vw;

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
    font-size: 2vw;
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
  align-items: flex-end;
  position: absolute;
  top: 70px;
  right: 0;
  width: 40%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  /*background-color: ${props => props.theme.darkBg};*/
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
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
