import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeList = styled('ul')`
  list-style: none;
`;

export const StyledHomeLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  &:hover {
    color: #87cefa;
  }
`;
