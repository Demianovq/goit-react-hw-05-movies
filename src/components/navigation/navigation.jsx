import { StyledLink, NavList } from './navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </NavList>
    </nav>
  );
};
