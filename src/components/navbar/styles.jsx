import styled from "styled-components";
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  color: white;
`;

export const Logo = styled.div`
  display: flex;
  margin-left: 61px;
  align-items: center;
  gap: 12px;
`;

export const LogoText = styled.span`
  font-size: 54px;
  font-family: Advent Pro;
`;

export const LinkItems = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  gap: 50px;
  margin-right: 61px;
  font-family: Advent Pro;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
`;
