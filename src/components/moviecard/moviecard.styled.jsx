import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCardBlock = styled('ul')`
  display: flex;
  gap: 50px;
`;

export const CastLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  margin-right: 20px;
  margin-top: 50px;
  &:hover {
    color: #87cefa;
  }
`;

export const ReviewsLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  &:hover {
    color: #87cefa;
  }
`;
