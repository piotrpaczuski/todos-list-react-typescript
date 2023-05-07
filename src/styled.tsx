import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: whitesmoke;
    word-break: break-word;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const StyledWidthWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const StyledUl = styled.ul`
  text-align: center;
  width: auto;
  background-color: teal;
  list-style: none;
  height: auto;
  margin: 0;
  padding: 15px;
`;

export const StyledLi = styled.li`
  display: inline-block;
  margin: 8px 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    font-weight: bold;
    color: white;
  }
`;