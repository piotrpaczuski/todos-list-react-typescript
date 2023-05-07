import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";

import {
  StyledLi,
  StyledNavLink,
  StyledUl,
  StyledWidthWrapper,
} from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <StyledUl>
        <StyledLi>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </StyledLi>
      </StyledUl>
      <StyledWidthWrapper>
        <Switch>
          <Route path="/zadania/:id">
            <TaskPage />
          </Route>
          <Route path="/zadania">
            <TasksPage />
          </Route>
          <Route path="/autor">
            <AuthorPage />
          </Route>
          <Route path="/">
            <Redirect to="/zadania" />
          </Route>
        </Switch>
      </StyledWidthWrapper>
    </nav>
  </HashRouter>
);
