import styled from "styled-components";
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  color: white;
  font-family: Advent Pro;

`;

export const Logo = styled.div`
  display: flex;
  margin-left: 61px;
  align-items: center;
  gap: 12px;

`;
export const LogoImage = styled.div`
  transition: transform 0.7s ease;

  &:hover {
    transform: rotate(360deg);
  }
`;

export const LogoText = styled.span`
  font-size: 54px;
`;

export const LinkItems = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  gap: 50px;
  margin-right: 61px;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  transition: font-size 0.2s ease;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.25);

  &:hover {
    font-size: 32px;
    border-bottom: 2px solid white;
  }
`;
