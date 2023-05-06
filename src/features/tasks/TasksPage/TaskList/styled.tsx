import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface StyledSpanProps {
  done: boolean;
}

export const StyledList = styled.ul`
  list-style: none;
  padding: 20px;
`;

export const StyledListItem = styled.li`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  border-bottom: 1px solid lightgray;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const StyledSpan = styled.span<StyledSpanProps>`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  @media (min-width: 767px) {
    align-items: center;
  }
`;

export const StyledButtonAdd = styled(Button)`
  background-color: rgb(76, 190, 76);
  margin-right: 10px;

  &:hover {
    background-color: hsl(120, 47%, 63%);
  }
`;

export const StyledButtonRemove = styled(Button)`
  background-color: hsl(0, 81%, 58%);
  margin-left: 10px;

  &:hover {
    background-color: hsl(0, 81%, 70%);
  }
`;

export const StyledLink = styled(Link)`
  color: teal;
  text-decoration: none;
`;
