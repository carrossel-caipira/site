import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

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
  background-color: rgba(255, 255, 255, 0.7);
  color: ${(props) => props.theme.darkBg};

  width: 100vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 0 80px;
  transition: background-color 0.3s ease;

  @media (max-width: ${(props) => props.theme.deviceMobile}) {
    height: 70px;
    padding: 0 35px;
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
  flex-grow: 1;
  height: 100%


  @media (max-width: ${(props) => props.theme.deviceMobile}) {
    gap: 0.5rem;
  }
`;

export const LogoImage = styled.div`
  transition: transform 0.7s ease;

  img {
    width: 4.6rem;

    @media (max-width: ${(props) => props.theme.deviceMobile}) {
      width: 2.9rem;
    }

    @media (max-width: ${(props) => props.theme.deviceMobile}) {
      width: 2.3rem;
    }
  }

  &:hover {
    transform: rotate(-360deg);
  }
`;

export const LogoText = styled.span`
  // font-size: 3rem;

  // @media (max-width: ${(props) => props.theme.deviceMobile}) {
  //   font-size: 2rem;
  // }

  font-size: 2.16rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 2.05rem;
  }

  @media (max-width: 650px) {
    font-size: 1.6rem;
  }

   @media (max-width: 380px) {
    font-size: 1.3rem;
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
    font-size: 1.95rem;
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
