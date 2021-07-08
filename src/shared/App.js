import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { actionCreators as calendarActions } from "../redux/modules/calendar";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";
import Calendar from "../pages/Calendar";
import Add from "../pages/Add";
import ErrorPage from "../pages/ErrorPage";

function App() {
  const dispatch = useDispatch();

  dispatch(calendarActions.loadCalendarFB());

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Calendar} />
            <Route path="/add" component={Add} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div``;

export default App;
