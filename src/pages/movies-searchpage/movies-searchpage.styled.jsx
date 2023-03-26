import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchBtn = styled('button')`
  background-color: #4682b4;
  border: none;
  padding: 8px 10px;
  margin-left: 10px;
  border-radius: 10%;
  &:hover {
    background-color: #87cefa;
  }
`;

export const Form = styled('form')`
  margin-top: 10px;
  margin-left: 30px;
`;

export const FormInput = styled('input')`
  width: 200px;
  height: 30px;
  font-size: 20px;
  &:hover {
    background-color: #87cefa;
  }
`;

export const MoviesList = styled('ul')`
  list-style: none;
`;

export const StyledMovieLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  &:hover {
    color: #87cefa;
  }
`;
