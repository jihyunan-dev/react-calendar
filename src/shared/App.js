import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { actionCreators as calendarActions } from "../redux/modules/calendar";

// components
import GlobalStyles from "./GlobalStyles";
import theme from "./theme";

// page
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
