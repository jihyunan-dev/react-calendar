import React from "react";
import GlobalStyles from "./GlobalStyles";
import { Link, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Calendar from "../pages/Calendar";
import theme from "./theme";
import Add from "../pages/Add";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Route path="/" exact component={Calendar} />
        <Route path="/add" component={Add} />
      </div>
    </ThemeProvider>
  );
}

export default App;
