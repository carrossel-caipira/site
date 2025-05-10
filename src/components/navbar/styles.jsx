import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

const purple = "#a04ccc";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  color: white;
  top: 0;
  font-family: Advent Pro;
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.7);
  color: ${(props) => props.theme.darkBg};

  width: 100vw;
  position: fixed;
  padding: 0 80px;
  transition: background-color 0.3s ease;

  @media (max-width: ${(props) => props.theme.deviceMobile}) {
    height: 70px;
    padding: 0 35px;
  }

  backdrop-filter: blur(5px);
  z-index: 5;
`;

export const Logo = styled(Link)`
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
  height: 100%;

  @media (max-width: ${(props) => props.theme.deviceMobile}) {
    gap: 0.5rem;
  }

  &:hover > . {
    color: ${purple};
  }
`;

export const LogoImage = styled.div`
  transition: transform 0.7s ease;

  img {
    height: 55px;
    width: 55px;
    object-fit: contain;
  }

  &:hover {
    transform: rotate(-360deg);
  }
`;

export const LogoText = styled.span`
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 1.85rem;
  }

  @media (max-width: 650px) {
    font-size: 1.6rem;
  }

   @media (max-width: 380px) {
    font-size: 1.3rem;
  }

  &:hover {
    color: ${purple};
  }
`;

export const LinkItems = styled.div`
  display: flex;
  align-items: center;
  gap: 5vw;
  font-size: 2rem;
  font-size: 1.7rem;

  @media (max-width: 1025px) {
    display: none;
  }

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.deviceMobile}) {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${purple};
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 3rem;


  @media (max-width: 1025px) {
    display: block;
    font-size: 2rem;
    margin-bottom: -15px;
  }

  @media (max-width: 650px) {
    display: block;
    font-size: 1.5rem;
    margin-bottom: -11px;
  }

  @media (max-width: 380px) {
    font-size: 1.2rem;
    margin-bottom: -8px;
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
    color: ${(props) => props.theme.darkBg};
    width: 60%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 20px;
    gap: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 650px) {
    top: 70px;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    display: flex;
    transform: translateX(0);
  `}

  @media (max-width: 1025px) {
    display: flex;
    transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
    gap: 0.8rem;
    font-size: 1rem;
  }

  ${NavLink} {
    font-size: 1.7rem;

    @media (max-width: 1025px) {
      font-size: 1.4rem;
    }
  }
`;
