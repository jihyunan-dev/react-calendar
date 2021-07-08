import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { actionCreators as calendarActions } from "../redux/modules/calendar";

import GlobalStyles from "./GlobalStyles";
import Calendar from "../pages/Calendar";
import theme from "./theme";
import Add from "../pages/Add";

function App() {
  const dispatch = useDispatch();

  dispatch(calendarActions.loadCalendarFB());

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <BrowserRouter>
          <Route path="/" exact component={Calendar} />
          <Route path="/add" component={Add} />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div``;

export default App;
