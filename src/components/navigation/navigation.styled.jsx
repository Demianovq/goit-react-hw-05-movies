import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  &.active {
    color: blue;
  }
`;

export const NavList = styled('ul')`
  list-style: none;
  display: flex;
  gap: 20px;
`;
